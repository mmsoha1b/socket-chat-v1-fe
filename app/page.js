import SignIn from "./components/SignIn";

export default function Home() {
  return (
    <main className='w-1/2 relative top-[50vh]  left-1/4 -translate-y-2/3 '>
      <div className='bg-white w-full h-[50vh] p-8 flex justify-center shadow-xl'>
        <SignIn />
      </div>
    </main>
  );
}
