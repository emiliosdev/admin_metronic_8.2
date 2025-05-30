import {DataUtil, EventHandlerUtil, getUniqueIdWithPrefix,} from '@presentation/layout/kt/_utils';
// Helpers
import {CookieComponent} from './_CookieComponent';

export interface ToggleOptions {
  saveState: boolean;
  targetState?: string;
  toggleState?: string;
  targetToggleMode?: string;
}

const defaultToggleOptions: ToggleOptions = {
  saveState: false,
};

class ToggleComponent {
  element: HTMLElement;
  instanceUid: string;
  options: ToggleOptions;
  state: string = '';
  mode: string = '';
  target: HTMLElement | null = null;
  attribute: string = '';

  constructor(_element: HTMLElement, options: ToggleOptions) {
    this.options = Object.assign(defaultToggleOptions, options);
    this.instanceUid = getUniqueIdWithPrefix('toggle');
    this.element = _element;

    const elementTargetAttr = this.element.getAttribute(
      'data-kt-toggle-target'
    );
    if (elementTargetAttr) {
      this.target = document.querySelector(elementTargetAttr);
    }
    const elementToggleAttr = this.element.getAttribute('data-kt-toggle-state');
    this.state = elementToggleAttr || '';
    const elementModeAttr = this.element.getAttribute('data-kt-toggle-mode');
    this.mode = elementModeAttr || '';
    this.attribute =
      'data-kt-' + this.element.getAttribute('data-kt-toggle-name');

    // Event Handlers
    this._handlers();

    // Update Instance
    // Bind Instance
    DataUtil.set(this.element, 'toggle', this);
  }

  private _handlers = () => {
    this.element.addEventListener('click', (e: Event) => {
      e.preventDefault();

      if (this.mode === '') {
        this._toggle();
        return;
      }

      if (this.mode === 'off' && !this._isEnabled()) {
        this._toggle();
      } else if (this.mode === 'on' && this._isEnabled()) {
        this._toggle();
      }
    });
  };

  // Event handlers
  private _toggle = () => {
    // Trigger "after.toggle" event
    EventHandlerUtil.trigger(this.element, 'kt.toggle.change');

    if (this._isEnabled()) {
      this._disable();
    } else {
      this._enable();
    }

    // Trigger "before.toggle" event
    EventHandlerUtil.trigger(this.element, 'kt.toggle.changed');
    return this;
  };

  private _enable = () => {
    if (this._isEnabled()) {
      return;
    }

    EventHandlerUtil.trigger(this.element, 'kt.toggle.enable');
    this.target?.setAttribute(this.attribute, 'on');
    if (this.state.length > 0) {
      this.element.classList.add(this.state);
    }

    if (this.options.saveState) {
      CookieComponent.set(this.attribute, 'on', {});
    }

    EventHandlerUtil.trigger(this.element, 'kt.toggle.enabled');
    return this;
  };

  private _disable = () => {
    if (!this._isEnabled()) {
      return false;
    }

    EventHandlerUtil.trigger(this.element, 'kt.toggle.disable');
    this.target?.removeAttribute(this.attribute);

    if (this.state.length > 0) {
      this.element.classList.remove(this.state);
    }

    if (this.options.saveState) {
      CookieComponent.delete(this.attribute);
    }

    EventHandlerUtil.trigger(this.element, 'kt.toggle.disabled');
    return this;
  };

  private _isEnabled = () => {
    if (!this.target) {
      return false;
    }

    return (
      String(this.target.getAttribute(this.attribute)).toLowerCase() === 'on'
    );
  };

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////

  // Plugin API
  // Plugin API
  public toggle = () => {
    return this._toggle();
  };

  public enable = () => {
    return this._enable();
  };

  public disable = () => {
    return this._disable();
  };

  public isEnabled = () => {
    return this._isEnabled();
  };

  public goElement = () => {
    return this.element;
  };

  // Event API
  public on = (name: string, handler: Function) => {
    return EventHandlerUtil.on(this.element, name, handler);
  };

  public one = (name: string, handler: Function) => {
    return EventHandlerUtil.one(this.element, name, handler);
  };

  public off = (name: string, handlerId: string) => {
    return EventHandlerUtil.off(this.element, name, handlerId);
  };

  public trigger = (name: string, event?: Event) => {
    return EventHandlerUtil.trigger(this.element, name, event);
  };

  // Static methods
  public static getInstance = (el: HTMLElement) => {
    const toggleElement = DataUtil.get(el, 'toggle');
    if (toggleElement) {
      return toggleElement;
    }

    return null;
  };

  public static createInstances = (selector: string) => {
    const elements = document.body.querySelectorAll<HTMLElement>(selector);
    elements.forEach((el) => {
      let toggleObj = ToggleComponent.getInstance(el);
      if (!toggleObj) {
        toggleObj = new ToggleComponent(el, defaultToggleOptions);

        // Add a class to prevent sidebar hover effect after toggle click
        // @ts-ignore
        toggleObj.on("kt.toggle.change", function () {
          // Set animation state
          el.closest('#kt_app_sidebar')?.classList.add("animating");

          // Wait till animation finishes
          setTimeout(function () {
            // Remove animation state
            el.closest('#kt_app_sidebar')?.classList.remove("animating");
          }, 300);
        });
      }
    });
  };

  public static reinitialization = () => {
    ToggleComponent.createInstances('[data-kt-toggle]');
  };

  public static bootstrap = () => {
    ToggleComponent.createInstances('[data-kt-toggle]');
  };
}

export {ToggleComponent, defaultToggleOptions};
