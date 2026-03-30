"use client";
import { use, useEffect, useState } from "react";
import {
  MusicPlayer,
  Menu,
  Messages,
  MusicList,
  ArtistsGrid,
  AddPost,
  Post,
} from "../components/HomePage";
import styles from "./page.module.css";

export default function Home() {
  const [searchBar, setsearchBar] = useState({
    Content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsearchBar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [refresh, setRefresh] = useState(0);

  const triggerRefresh = () => {
    setRefresh((prev) => prev + 1);
  };
  const [postData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/post");
        const data = await response.json();
        setPostsData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, [refresh]);

  console.log("Posts data fetched:", postData);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <input
          type="text"
          name="Content"
          placeholder="What do you want to play?"
          className={styles.searchBar}
          value={searchBar.Content}
          onChange={handleChange}
        />
      </div>
      <div className={styles.contents}>
        <div className={styles.leftMenu}>
          <div className={`${styles.musicPlayer} ${styles.subBlocks}`}>
            <MusicPlayer />
          </div>
          <div className={`${styles.menu} ${styles.subBlocks}`}>
            <Menu />
          </div>
        </div>
        <div className={styles.postArea}>
          <div className={`${styles.addPost} ${styles.subBlocks}`}>
            <AddPost onPostCreated = {triggerRefresh} />
          </div>
          <div className={`${styles.posts} ${styles.subBlocks}`}>
            {postData.map((post) => (
              <Post key={post._id} PostData={post}/>
            ))}
          </div>
        </div>
        <div className={styles.rightMenu}>
          <div className={`${styles.MusicList} ${styles.subBlocks}`}>
            <MusicList />
          </div>
          <div className={`${styles.artisits} ${styles.subBlocks}`}>
            <ArtistsGrid />
          </div>
          <div className={`${styles.MusicList} ${styles.subBlocks}`}>
            <MusicList />
          </div>
        </div>
      </div>
      {/* <div className={`${styles.messagesWindow} ${styles.subBlocks}`}>
        <Messages />
      </div> */}
    </div>
  );
}
