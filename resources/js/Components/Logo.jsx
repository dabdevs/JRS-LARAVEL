export default function Logo({admin}) {
    return (
        <a href={`${admin ? '/dashboard/cars' : '/'}`} className="text-xl font-bold text-primary">
            <img className="w-16 md:w-28 " src="/img/logo.png" alt="" />
        </a>
    );
}
