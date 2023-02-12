import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from "next";
import { useQuery, useMutation } from "@apollo/client";
import { GetLoginedUserDocument } from "../graphql/dist/client";
import { GetLoginedUserQuery } from "../graphql/dist/client";
import { useState } from 'react';
import { useRouter } from 'next/router';

const RoomPage:NextPage = () =>{
    const router = useRouter();
    const token = router.query.c;
    const { data }  = useQuery<GetLoginedUserQuery>(GetLoginedUserDocument)
    return (
    <>
    <p>room: {token}</p>
    logined: { data?.loginedUser.name }
    </>
    );
}
export default RoomPage;