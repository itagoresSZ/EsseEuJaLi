import { Typography } from "antd";
import { useEffect, useState } from "react";

const r = [
  {
    name: "João Silva",
    points: 1022,
  },
  {
    name: "Maria Santos",
    points: 1011,
  },
  {
    name: "Francisca Soares",
    points: 985,
  },
  {
    name: "Eli Santos",
    points: 980,
  },
  {
    name: "Addah Lira",
    points: 700,
  },
  {
    name: "Ana Amélia",
    points: 402,
  },
  {
    name: "Ranny Saraiva",
    points: 365,
  },
  {
    name: "Adson Alcantara",
    points: 256,
  },
  {
    name: "Reis Sobrinho",
    points: 122,
  },
  {
    name: "Aluisio Junior",
    points: 90,
  },
];

interface Props {
  points: number;
}

const Ranking = ({ points }: Props) => {
  const [list, setList] = useState(r);

  useEffect(() => {
    setList([...r, { name: "Você", points: points }]);
  }, [points]);

  return (
    <div>
      {list
        .sort((a, b) => b.points - a.points)
        .map((p, i) => (
          <>
            {i < 10 && (
              <div style={{ display: "flex", gap: "10px", marginTop: 10 }}>
                <div>{i + 1}°</div>
                <div style={{fontSize: "20px"}}>
                  {i === 0 && <span>🥇</span>}
                  {i === 1 && <span>🥈</span>}
                  {i === 2 && <span>🥉</span>}
                </div>
                <div>
                  <Typography.Text strong style={{fontSize: "20px"}}>{p.name}</Typography.Text>
                  <br />
                  <Typography.Text>{p.points} pontos</Typography.Text>
                  <br />
                </div>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default Ranking;
