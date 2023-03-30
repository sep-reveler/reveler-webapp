/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="283px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="16px 0px 16px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileInfo")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MainContent")}
      >
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 12px 0px"
          {...getOverrideProps(overrides, "FollowerCountLayout")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(12,20,31,1)"
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
            children="143,205"
            {...getOverrideProps(overrides, "FollowerValue")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(125,129,132,1)"
            lineHeight="12.102272033691406px"
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
            children="Followers"
            {...getOverrideProps(overrides, "Following36572953")}
          ></Text>
        </Flex>
        <View
          width="2.16px"
          height="39px"
          {...getOverrideProps(overrides, "Divider36572954")}
        ></View>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 12px 0px"
          {...getOverrideProps(overrides, "FollowingCountLayout")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(12,20,31,1)"
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
            children="210"
            {...getOverrideProps(overrides, "FollowingValue")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(125,129,132,1)"
            lineHeight="12.102272033691406px"
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
            children="Following"
            {...getOverrideProps(overrides, "Following36572957")}
          ></Text>
        </Flex>
      </Flex>
      <View
        width="unset"
        height="1px"
        {...getOverrideProps(overrides, "Divider36572958")}
      ></View>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="8px 0px 0px 0px"
        {...getOverrideProps(overrides, "ConnectionsLayout")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="40.43px"
          height="22.29px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "ProfilePictures")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="17px"
            height="16.54px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="5.5px"
            left="0px"
            {...getOverrideProps(overrides, "Rank3")}
          >
            <Image
              width="17px"
              height="16.54px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="100px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "RankImage3")}
            ></Image>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="21.14px"
            height="20.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.71px"
            left="9px"
            {...getOverrideProps(overrides, "Rank2")}
          >
            <Image
              width="21.14px"
              height="20.57px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="100px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "RankImage2")}
            ></Image>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="20.57px"
            height="22.29px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="19.86px"
            {...getOverrideProps(overrides, "Rank1")}
          >
            <Image
              width="20.57px"
              height="22.29px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="100px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "RankImage1")}
            ></Image>
          </View>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="500"
          color="rgba(12,20,31,1)"
          lineHeight="12.102272033691406px"
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
          children="23 mutual connections"
          {...getOverrideProps(overrides, "MutualConnectionsValue")}
        ></Text>
      </Flex>
    </Flex>
  );
}
