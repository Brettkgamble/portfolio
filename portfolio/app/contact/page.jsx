// https://www.youtube.com/watch?v=uqwZFnrCLj0
import '../globals.css';
import Input from '../../components/input';
import TextArea from "../../components/text";

export default function Page() {
    return (
        <main className="flex flex-col justify-between items-center p-24  min-h-screen">
            <div className="px-3 pt-10 w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
                <form className="flex flex-col items-center w-full mx-auto">
                    <Input id="name" name="name" placeholder="Your Name" label="Your Name"/>
                    <Input id="email" name="email" placeholder="email@email.com" label="Your Email"/>
                    <TextArea id="message" name="message" placeholder="Your message" label="Message"/>

                    <button className="w-full py-2 mt-6 text-lg text-white bg-purple-500 rounded-md
                                outline-none active:bg-purple-600 focus:ring-2 focus:ring-purple-400
                                disabled:bg-opacity-40 disabled:cursor-not-allowed"
                        type="submit"
                        // disabled={true}
                    >
                        Submit
                    </button>
                </form>

            </div>

        </main>
    )
}