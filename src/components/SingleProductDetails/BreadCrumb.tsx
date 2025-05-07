import styles from './styles.module.css' 
import Arrow from "../../assets/arrow.svg"
import { useNavigate } from "react-router-dom";
import { Product } from '../../productList';

type Props = {
    product: Product
}

export const BreadCrumb = ({product}: Props) => {
    const navigate = useNavigate();

    return (
        <>
        <header className={styles.header}>
        <p className={styles.pathBreadcrumb} onClick={() => navigate("/")}>Home</p>
        <img src={Arrow} alt="arrow right" />
        <p className={styles.pathBreadcrumb} onClick={() => navigate("/")}>Shop</p>
        <img src={Arrow} alt="arrow right" />
        <p className={styles.titleBreadcrumb}>{product.title}</p>
      </header>
      </>
    )
}