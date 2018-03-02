//
//  AnalogClockManager.m
//  FEDReactNativeIntro
//
//  Created by Ran Greenberg on 09/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import "BEMAnalogClockView.h"
#import <UIKit/UIKit.h>

@interface AnalogClockManager : RCTViewManager
@end


@implementation AnalogClockManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  BEMAnalogClockView *myClock = [[BEMAnalogClockView alloc] init];
  myClock.currentTime = YES;
  return myClock;
}

RCT_CUSTOM_VIEW_PROPERTY(autoUpdate, BOOL, BEMAnalogClockView)
{
  view.realTime = [RCTConvert BOOL:json] ?: NO;
}

@end
