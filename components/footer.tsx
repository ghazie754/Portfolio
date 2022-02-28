function footer() {
  const Today: Date = new Date();
  return (
    <div className="footer">
      <p>COPYRIGHT &copy; {Today.getUTCFullYear()}</p>
    </div>
  );
}

export default footer;
