/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function SideMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,0.41)"
      {...rest}
      {...getOverrideProps(overrides, "SideMenu")}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="8px 8px 8px 8px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 32px 8px"
          {...getOverrideProps(overrides, "LogoWrapper")}
        >
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "Logo")}
          ></Flex>
        </Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "HomeButton")}
        ></Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "ConnectionsButton")}
        ></Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "MessagesButton")}
        ></Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "NotificationsButton")}
        ></Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="8px 0px 8px 0px"
          {...getOverrideProps(overrides, "Frame 8")}
        >
          <View
            width="unset"
            height="1px"
            {...getOverrideProps(overrides, "Divider")}
          ></View>
        </Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "BookmarksButton")}
        ></Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "MyActivitiesButton")}
        ></Flex>
        <Flex
          width="173px"
          height="unset"
          {...getOverrideProps(overrides, "SettingsButton")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
