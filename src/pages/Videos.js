export default function Videos() {

    const videos = [
        {
            id: 1,
            title: 'Java JDBC ile Hibernate Klon Denemesi',
            url: 'https://youtu.be/Z4hWxNRM6GI?si=XiVczl2SVAwB3Qfi',
            description: 'Core Java ile Statement ve PreparedStatement kullanımı ORM mantığını anlamak için önemli bir konudur.',
            thumbnail: 'https://i.ytimg.com/vi/Z4hWxNRM6GI/hqdefault.jpg',
            tags: ['Java']
        },
        {
            id: 2,
            title: 'Spring Boot and React Full Stack Web Application Development | Frontend #2',
            url: 'https://youtu.be/rUBJY7QgFgI?si=Pp8UWe2qfWnx7vVn',
            description: 'Hello, we are completing our full-stack application by writing the interface using React for the API we made in the first video.',
            thumbnail: 'https://i.ytimg.com/vi/rUBJY7QgFgI/hqdefault.jpg',
            tags: ['Java', 'Spring Boot', 'React', 'JavaScript']
        },
    ];

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {videos.map((video) => (
                <li key={video.id} className="flex justify-between gap-x-6 py-5 rounded mx-auto">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <a href={video.url} target="_blank" rel="noreferrer">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{video.title}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{video.description}</p>
                            </a>
                            <div className="mt-6">
                                {video.tags.map((tag) => (<span
                                    className="bg-blue-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-white">{tag}</span>))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <img className="text-sm leading-6 text-gray-900 rounded" height={220} width={120}
                             src={video.thumbnail}
                             alt={video.title}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}