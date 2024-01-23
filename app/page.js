import styles from "./styles.module.css";
export default function Home() {
  return (
    <main className='flex justify-center items-center flex-col flex-1 bg-white m-4 border-[1px] border-gray-400'>
      <h2
        className={"font-extrabold text-8xl cursor-pointer shadow-stone-800 "}
      >
        Socket Chat
      </h2>
    </main>
  );
}
