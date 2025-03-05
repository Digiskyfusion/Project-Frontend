import { useState, useEffect } from "react";


const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token"); // Assuming token is stored

  // Fetch all categories (READ)
  const fetchCategories = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/category/getallCategory`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch categories.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch Single Category by ID
  const fetchCategoryById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/category/singlecategory/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setSelectedCategory(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error fetching category.");
    }
  };

  // Create category (CREATE)
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/category/createCategory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Category created successfully!");
        setName("");
        fetchCategories(); // Refresh list
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error creating category.");
    }
  };

  // Update category (UPDATE)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/category/updateCategory/${editingCategory._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Category updated successfully!");
        setEditingCategory(null);
        setName("");
        fetchCategories(); // Refresh list
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error updating category.");
    }
  };

  // Delete category (DELETE)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      const response = await fetch(`http://localhost:3000/api/category/deleteCategory/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Category deleted successfully!");
        fetchCategories(); // Refresh list
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error deleting category.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Manage Categories</h2>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={editingCategory ? handleUpdate : handleCreate} className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {editingCategory ? "Update Category" : "Create Category"}
        </button>
      </form>

      <ul className="space-y-2 ">
        {categories.map((category) => (
          <li key={category._id} className="flex justify-between items-center p-2 border rounded">
            <span>{category.name}</span>
            <div>
              <button
                onClick={() => {
                  setEditingCategory(category);
                  setName(category.name);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => fetchCategoryById(category._id)}
                className="bg-green-500 text-white px-3 py-1 rounded ml-2"
              >
                View
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div className="mt-4 p-4 border rounded shadow">
          <h3 className="text-md font-semibold">Category Details</h3>
          <p><strong>ID:</strong> {selectedCategory._id}</p>
          <p><strong>Name:</strong> {selectedCategory.name}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryManager;
