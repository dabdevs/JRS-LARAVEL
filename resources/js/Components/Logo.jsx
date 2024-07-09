export default function Logo({admin}) {
    return (
        <a href={`${admin ? '/dashboard/cars' : '/'}`} className="text-xl font-bold text-primary">
            <img width="130" src="/img/logo.png" alt="" />
        </a>
    );
}
