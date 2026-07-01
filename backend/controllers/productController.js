const db = require("../config/db");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
}
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM products WHERE id = ?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const [result] = await db.query(
      "INSERT INTO products (name, price, category) VALUES (?, ?, ?)",
      [name, price, category]
    );

    res.status(201).json({
      message: "Product created successfully",
      id: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    await db.query(
      "UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?",
      [name, price, category, req.params.id]
    );

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await db.query(
      "DELETE FROM products WHERE id = ?",
      [req.params.id]
    );

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
