import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
    return (
        <>
            <Link to="/">
                <img
                    src="https://img1.creatium.ru/disk2/33/21/d9/01c78a12532364a53ec8f2ee3118b17e2d/140x70/verstablack.svg"
                    style={{ width: "25%", display: 'flex', marginLeft: 16 }}
                    alt="Логотип"
                />
            </Link>
            <Outlet />
        </>
    );
}