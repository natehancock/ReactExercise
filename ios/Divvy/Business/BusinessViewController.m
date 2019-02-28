//
//  BusinessViewController.m
//  Divvy
//
//  Created by Nathan Hancock on 2/28/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>



#import <React/RCTViewManager.h>


@interface BusinessViewController : RCTViewManager

@end

@implementation BusinessViewController

RCT_EXPORT_MODULE()

- (UIView *)view {
  UIView *view =  [[UIViewController alloc] init].view;
  view.backgroundColor = [UIColor redColor];
  return view;
}

@end
