import styles from "@/pages/css/quadrado.module.css"
export default function linhaTabuleiro(){
    return (
        <div>
            <div className={styles.controledirecao}>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
            </div>
            <div className={styles.controledirecao}>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
                <div className={styles.quadradoBranco}></div>
                <div className={styles.quadradoPreto}></div>
            </div>
         </div>
         
         
        
    )
}