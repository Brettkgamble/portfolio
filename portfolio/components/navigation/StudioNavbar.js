'use client'
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
                    {/* see around 45minutes*/}
                    <ArrowUturnLeftIcon style={{height: "18px", width: "18px"}} />
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar;