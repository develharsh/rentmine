const Loader = () => {
    return (
        <div style={{ position: "fixed", width: "100%", zIndex: "1" }}>
            <div className="progress #f06292 pink lighten-2">
                <div className="indeterminate #7b1fa2 purple darken-2"></div>
            </div>
        </div>
    )
}
export default Loader