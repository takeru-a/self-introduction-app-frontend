import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from "next";
import { useQuery, useSubscription} from "@apollo/client";
import { GetLoginedUserDocument, GetRoomDocument, AddPlayersDocument } from "../graphql/dist/client";
import { GetLoginedUserQuery, GetRoomQuery, AddPlayersSubscription } from "../graphql/dist/client";
import { useRouter } from 'next/router';

const RoomPage:NextPage = () =>{
    const router = useRouter();
    const host = "localhost:3000"
    const { data }  = useQuery<GetLoginedUserQuery>(GetLoginedUserDocument)
    if(data?.loginedUser.code === 401){
        router.push("/")
    }
    const room = useQuery<GetRoomQuery>(GetRoomDocument, {variables: {id: data?.loginedUser.roomId}})
    const players = useSubscription<AddPlayersSubscription>(AddPlayersDocument, {variables:{token: data?.loginedUser.roomToken, userId: data?.loginedUser.userId}})

    const copylink = () => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText( host + "/?c="+ data?.loginedUser.roomToken);
      }
    }
    return (
    <>
      <div style={{ margin: "0 auto", width: "1000px" }}>
      <p>AddPlayers</p>
      {
      players.data?.changeRoom.players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
        </div>
         ))}
        <p>Players</p>
         {
      room.data?.room.players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
        </div>
         ))}
      </div>
    <p>token: {data?.loginedUser.roomToken}</p>
    <p>room_id: {data?.loginedUser.roomId}</p>
    <p>logined: { data?.loginedUser.name }</p>
    <p>code: {data?.loginedUser.code}</p>
    <p>user_id: {data?.loginedUser.userId}</p>
    <div>
    <button onClick={copylink}>
      Copy Link
    </button>
  </div>
    </>
    );
}
export default RoomPage;
