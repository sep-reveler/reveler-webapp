/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function PageButtons(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="6px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(250,250,250,1)"
      borderRadius="8px"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "PageButtons")}
    >
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "HomeFeedButton")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "PopularFeedButton")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "NewsFeedButton")}
      ></Flex>
    </Flex>
  );
}
