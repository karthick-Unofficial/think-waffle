import React from "react";
import { categories } from "../data/categories";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Categories = () => {
    const styles = {
        title: {
            fontFamily: "Ephesis",
            fontWeight: "bold",
            fontSize: 38,
            marginBottom: 10
        },
        image: {
            width: 200,
            borderRadius: 120,
        },
        category: {
            width: "25%",
            padding: "10px 0",
        },
        categoryName: {
            fontFamily: "Ephesis",
            fontWeight: "bold",
            fontSize: 24
        },
        completeMenuBtn: {
            fontFamily: "Ephesis",
            fontSize: 18,
            fontWeight: "bold",
            margin: 20,
            background: "rgb(108, 77, 47)",
            width: 300,
            textTransform: "unset"
        }
    }

    return (
        <div style={{ margin: "50px 0", background: "#ffedcd" }}>
            <Typography style={styles.title}>Our Servings</Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }} >
                {
                    categories.map((category) => (
                        <div style={styles.category}>
                            <img key={category.id} src={category.image} alt={category.name} style={styles.image} />
                            <Typography style={styles.categoryName}>{category.name}</Typography>
                        </div>
                    ))
                }
            </div>
            <Button variant="contained" style={styles.completeMenuBtn}>View Complete Menu</Button>
        </div>
    );
}

export default Categories;