package com.fedreactnativeintro;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.tomerrosenfeld.customanalogclockview.CustomAnalogClock;

public class AnalogClockViewManager extends SimpleViewManager<CustomAnalogClock> {
  @Override
  public String getName() {
    return "AnalogClock";
  }

  @Override
  protected CustomAnalogClock createViewInstance(ThemedReactContext reactContext) {
    return new CustomAnalogClock(reactContext);
  }

  @ReactProp(name = "autoUpdate")
  public void setAutoUpdate(CustomAnalogClock view, Boolean autoUpdate) {
    view.setAutoUpdate(autoUpdate);
  }

}