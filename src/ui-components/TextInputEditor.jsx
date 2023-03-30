/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function TextInputEditor(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="647px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="16px 24px 16px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TextInputEditor")}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="10px 0px 10px 0px"
        {...getOverrideProps(overrides, "InputLayout")}
      >
        <Flex
          gap="0"
          direction="row"
          width="40px"
          height="unset"
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
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="100px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(31,133,249,1)"
          {...getOverrideProps(overrides, "SendButton")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "MyIcon")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
