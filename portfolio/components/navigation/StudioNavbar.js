import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props) {
    return (
        <div>
            <div>
                <Link
                    href="/"
                    className="text-white flex items-center"
                >
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar;