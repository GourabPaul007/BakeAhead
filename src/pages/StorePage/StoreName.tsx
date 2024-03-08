interface StoreNameProps {
  storeName: string;
}

const StoreName: React.FC<StoreNameProps> = ({ storeName }) => {
  const color = "#000";

  return (
    <>
      <div style={{ display: "grid", placeItems: "center" }}>
        <h1 style={{ color: color }}>{storeName}</h1>
        <hr
          style={{
            border: `1px solid ${color}`,
            backgroundColor: color,
            width: 48,
          }}
        />
      </div>
    </>
  );
};

export default StoreName;
