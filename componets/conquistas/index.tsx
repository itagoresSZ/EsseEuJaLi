import { Space, Typography } from "antd";
import styles from "../../styles/Home.module.css";


interface Props {
  points: number;
  trofeus: {};
}
const Conquistas = ({ points, trofeus }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.card}>
        <Typography.Text> ⭐️ TOTAL DE PONTOS</Typography.Text>
        <br />
        <Typography.Text strong style={{ fontSize: 40 }}>
          {points}
        </Typography.Text>
        <Typography.Text strong style={{ fontSize: 20 }}>
          {" "}
          Pontos
        </Typography.Text>
      </div>

      <div className={styles.card}>
        <Typography.Text>TROFÉUS</Typography.Text>
        <br />
        <Space size={[20, 8]} wrap align={"start"}>
          {Object.entries(trofeus).map((t) => (
            <>
              {t[1] >= 5 && (
                <Typography.Text strong style={{ fontSize: 25 }}>
                  <>🏆 Leitor de {t[0]}</>
                </Typography.Text>
              )}
            </>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Conquistas;
