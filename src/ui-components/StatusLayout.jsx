/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function StatusLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      width="623px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="16px 12px 16px 12px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "StatusLayout")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 0px 10px 0px"
        {...getOverrideProps(overrides, "InputLayout")}
      >
        <Flex
          gap="0"
          direction="row"
          width="40px"
          height="40px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="128px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ImageWrapper")}
        >
          <Image
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "ProfileImage")}
          ></Image>
        </Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "StatusField")}
        ></Flex>
      </Flex>
      <View
        width="unset"
        height="1px"
        {...getOverrideProps(overrides, "Divider")}
      ></View>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ControlsLayout")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ButtonGroup")}
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
              {...getOverrideProps(overrides, "MyIcon36573314")}
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
              {...getOverrideProps(overrides, "MyIcon36573316")}
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
              {...getOverrideProps(overrides, "MyIcon36573318")}
            ></View>
          </Flex>
        </Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "PostButton")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
