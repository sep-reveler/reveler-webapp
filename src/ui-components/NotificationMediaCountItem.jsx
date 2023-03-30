/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NotificationMediaCountItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="60px"
      height="60px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(233,243,254,1)"
      {...rest}
      {...getOverrideProps(overrides, "NotificationMediaCountItem")}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="500"
        color="rgba(33,133,249,1)"
        lineHeight="16.94318199157715px"
        textAlign="center"
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
        children="+9"
        {...getOverrideProps(overrides, "CountText")}
      ></Text>
    </Flex>
  );
}
