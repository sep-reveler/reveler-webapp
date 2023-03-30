/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function MobileMessageHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="334px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="16px 24px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MobileMessageHeader")}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="500"
        color="rgba(12,20,31,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Chat with Amanda"
        {...getOverrideProps(overrides, "TitleText")}
      ></Text>
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
        {...getOverrideProps(overrides, "CloseButton")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "MyIcon")}
        ></View>
      </Flex>
    </Flex>
  );
}
