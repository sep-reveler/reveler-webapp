/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function PostCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="530px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="16px 12px 16px 12px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PostCard")}
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TopLayout")}
      >
        <Flex
          gap="0"
          direction="row"
          width="40px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="128px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ImageWrapper36573206")}
        >
          <Image
            width="40px"
            height="42px"
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
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InfoLayout")}
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
            children="Doge Coiner"
            {...getOverrideProps(overrides, "UserName")}
          ></Text>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TimeStampLayout")}
          >
            <Icon
              width="10.83px"
              height="10.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.83349609375,
                height: 10.83349609375,
              }}
              paths={[
                {
                  d: "M5.79167 2.16667C5.79167 1.95956 5.62377 1.79167 5.41667 1.79167C5.20956 1.79167 5.04167 1.95956 5.04167 2.16667L5.79167 2.16667ZM5.41667 5.41667L5.04167 5.41667C5.04167 5.55871 5.12192 5.68856 5.24896 5.75208L5.41667 5.41667ZM7.41563 6.83541C7.60087 6.92803 7.82612 6.85295 7.91874 6.66771C8.01136 6.48246 7.93628 6.25721 7.75104 6.16459L7.41563 6.83541ZM10.4583 5.41667C10.4583 8.2011 8.2011 10.4583 5.41667 10.4583L5.41667 11.2083C8.61532 11.2083 11.2083 8.61532 11.2083 5.41667L10.4583 5.41667ZM5.41667 10.4583C2.63223 10.4583 0.375 8.2011 0.375 5.41667L-0.375 5.41667C-0.375 8.61532 2.21802 11.2083 5.41667 11.2083L5.41667 10.4583ZM0.375 5.41667C0.375 2.63223 2.63223 0.375 5.41667 0.375L5.41667 -0.375C2.21802 -0.375 -0.375 2.21802 -0.375 5.41667L0.375 5.41667ZM5.41667 0.375C8.2011 0.375 10.4583 2.63223 10.4583 5.41667L11.2083 5.41667C11.2083 2.21802 8.61532 -0.375 5.41667 -0.375L5.41667 0.375ZM5.04167 2.16667L5.04167 5.41667L5.79167 5.41667L5.79167 2.16667L5.04167 2.16667ZM5.24896 5.75208L7.41563 6.83541L7.75104 6.16459L5.58437 5.08126L5.24896 5.75208Z",
                  stroke: "rgba(125,129,132,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Icon")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="10px"
              fontWeight="400"
              color="rgba(125,129,132,1)"
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
              children="12 minutes ago"
              {...getOverrideProps(overrides, "TimeStamp")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ButtonsGroup")}
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
            {...getOverrideProps(overrides, "BookmarkButton")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "MyIcon36573215")}
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
            {...getOverrideProps(overrides, "MoreButton")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "MyIcon36573217")}
            ></View>
          </Flex>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(12,20,31,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Enjoying a much needed relaxing day in nature! These mountains are awesome! #nature #dayoff #staycation "
        {...getOverrideProps(overrides, "ContentText")}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ContentMedia")}
      >
        <Flex
          gap="0"
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
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ImageWrapper36573220")}
        >
          <Image
            width="unset"
            height="487.08px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "Image")}
          ></Image>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SocialLayout")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="16px"
          padding="6px 8px 6px 8px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "LikesButton")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "MyIcon36573224")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(12,20,31,1)"
            lineHeight="14.522727012634277px"
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
            children="9.9K"
            {...getOverrideProps(overrides, "LikesButtonText")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="32px"
          padding="6px 8px 6px 8px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "CommentsButton")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "MyIcon36573227")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(12,20,31,1)"
            lineHeight="14.522727012634277px"
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
            children="9.9K"
            {...getOverrideProps(overrides, "CommentsButtonText")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="32px"
          padding="6px 8px 6px 8px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "ShareButton")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "MyIcon36573230")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(12,20,31,1)"
            lineHeight="14.522727012634277px"
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
            children="9.9K"
            {...getOverrideProps(overrides, "ShareButtonText")}
          ></Text>
        </Flex>
      </Flex>
      <View
        width="unset"
        height="1px"
        {...getOverrideProps(overrides, "Divider")}
      ></View>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="2px 1px 2px 1px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "InputLayout")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "TextField")}
        ></Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "ButtonSlot")}
        ></Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "CommentsSlot")}
      ></Flex>
    </Flex>
  );
}
