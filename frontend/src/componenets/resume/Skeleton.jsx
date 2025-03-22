import React from 'react';

function Skeleton({ work_title, work_desc_array, work_role, work_location, work_Duration }) {
    return (
        <>
        <div className="bg-base-100 pl-3 pr-3 flex flex-col w-auto mt-3 z-1">
            <div className="absolute left-0 top-0 h-full w-[4px] bg-primary z-1"></div>

            <div className="flex flex-row justify-between items-start w-full">
                <div className="w-full">
                    <h2 className="card-title text-base">{work_title}</h2>
                    {work_role && <h2 className="card-title text-sm">{work_role}</h2>}
                </div>

                <div className="w-[75%] text-right">
                    {work_location && <h2 className="text-sm">{work_location}</h2>}
                    {work_Duration && <h2 className="text-xs pt-[4px]">{work_Duration}</h2>}
                </div>
            </div>

            <div className="mt-3 flex flex-col">
                <ol className='list-disc pl-[1rem]'>
                {work_desc_array.map((element, index) => (
                    <li key={index} className="text-xs">{element}</li>
                ))}
                </ol>
            </div>
        </div>
            </>
    );
}

export default Skeleton;
