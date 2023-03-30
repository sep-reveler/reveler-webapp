/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function InputButtonGroup(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "InputButtonGroup")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "CameraButton")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "MyIcon36573296")}
        ></View>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "ImageButton")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "MyIcon36573298")}
        ></View>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "AttachmentButton")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "MyIcon36573300")}
        ></View>
      </Flex>
    </Flex>
  );
}
