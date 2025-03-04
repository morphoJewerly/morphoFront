import React, { useContext, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useParams } from "react-router-dom";
import axios from '../../../../axios';
import styles from './CreateGoods.module.css';
import Header from '../../../Header';

function CreateGoods(props) {
    const [imgUrl, setImgUrl] = React.useState("");
    const [imgUrl2, setImgUrl2] = React.useState("");
    const [imgUrl3, setImgUrl3] = React.useState("");
    const [isVariant, setIsVariant] = useState(false);
    const [variants, setVariants] = useState([{
        title: "",
        price: "",
        imgmain: "",
        imgsecond: "",
        imgthird: ""
    }]);

    const { id } = useParams();
    const isEditing = Boolean(id);

    const { register, handleSubmit, reset, setValue, control, formState: { errors } } = useForm({
        defaultValues: {
            variants: [{ title: "", price: "", imgmain: "", imgsecond: "", imgthird: "" }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "variants",
    });

    const onSubmit = (data) => {
        let newData;

        if (isVariant) {
            newData = {
                price: 0,
                imgmain: "",
                imgsecond: "",
                imgthird: "",
                title: data.title,
                text1: data.text1,
                text2: data.text2,
                isVariant: true,
                category: data.category,
                variants: variants.map(variant => ({
                    title: variant.title,
                    price: variant.price,
                    imgmain: variant.imgmain,
                    imgsecond: variant.imgsecond,
                    imgthird: variant.imgthird
                }))
            };
        } else {
            newData = {
                ...data,
                isVariant: false,
                imgmain: imgUrl,
                imgsecond: imgUrl2,
                imgthird: imgUrl3
            };
        }

        if (isEditing) {
            axios.patch(`/posts/${id}`, newData)
                .then(function (response) {
                    alert("Товар успішно відредаговано)");
                    reset();
                })
                .catch(function (error) {
                    alert("Не вдалося відредагувати товар) Спробуйте будь ласка пізніше)");
                });
        } else {
            axios.post("/posts", newData)
                .then(function (response) {
                    alert("Товар успішно додано)");
                    reset();
                })
                .catch(function (error) {
                    alert("Не вдалося додати товар) Спробуйте будь ласка пізніше)");
                });
        }
    };

    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post("/upload", formData);
            setImgUrl(`https://walrus-app-fq6cy.ondigitalocean.app${data.url}`);
        } catch (error) {
            console.warn(error);
            alert("Помилка при завантаженні файлу");
        }
    };

    const handleChangeFile2 = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post("/upload", formData);
            setImgUrl2(`https://walrus-app-fq6cy.ondigitalocean.app${data.url}`);
        } catch (error) {
            console.warn(error);
            alert("Помилка при завантаженні файлу");
        }
    };

    const handleChangeFile3 = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post("/upload", formData);
            setImgUrl3(`https://walrus-app-fq6cy.ondigitalocean.app${data.url}`);
        } catch (error) {
            console.warn(error);
            alert("Помилка при завантаженні файлу");
        }
    };

    const handleVariantFileUpload = async (event, variantIndex, imageType) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post("/upload", formData);
            const imageUrl = `https://walrus-app-fq6cy.ondigitalocean.app${data.url}`;

            const updatedVariants = [...variants];
            updatedVariants[variantIndex][imageType] = imageUrl;
            setVariants(updatedVariants);
        } catch (error) {
            console.warn(error);
            alert("Помилка при завантаженні файлу");
        }
    };

    const handleVariantChange = (index, field, value) => {
        const updatedVariants = [...variants];
        updatedVariants[index][field] = value;
        setVariants(updatedVariants);
    };

    const addVariant = () => {
        setVariants([...variants, {
            title: "",
            price: "",
            imgmain: "",
            imgsecond: "",
            imgthird: ""
        }]);
    };

    const removeVariant = (index) => {
        if (variants.length > 1) {
            const updatedVariants = [...variants];
            updatedVariants.splice(index, 1);
            setVariants(updatedVariants);
        }
    };

    React.useEffect(() => {
        if (id) {
            axios.get(`/posts/${id}`).then(({ data }) => {
                setValue("title", data.title.toString());
                setValue("text1", data.text1.toString());
                setValue("text2", data.text2.toString());
                setValue("price", data.price);
                setValue("category", data.category);
                setImgUrl(data.imgmain);
                setImgUrl2(data.imgsecond);
                setImgUrl3(data.imgthird);
                if (data.isVariant) {
                    setIsVariant(true);
                    setVariants(data.variants || []);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.variantToggle}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isVariant}
                                onChange={() => setIsVariant(!isVariant)}
                            />
                            Вариативний товар
                        </label>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.item}>
                            <label htmlFor="category"></label>
                            <select id="category" {...register('category', { required: true })}>
                                <option className={styles.option1} value="1">каблучки</option>
                                <option className={styles.option} value="2">сережки</option>
                                <option className={styles.option} value="3">підвіски</option>
                                <option className={styles.option} value="4">різне</option>
                            </select>
                            {errors.category && <span style={{ color: "red" }}>Оберіть категорію</span>}
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="title"></label>
                            <input className={styles.input} placeholder=" назва товару" type="text" id="name" {...register('title', { required: true })} />
                            {errors.title && <span style={{ color: "red" }}>всі поля мають бути заповнені</span>}
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="text1"></label>
                            <textarea placeholder=" опис товару 1" rows="4" cols="50" type="text" id="text1" {...register('text1', { required: true })} />
                            {errors.text1 && <span style={{ color: "red" }}>всі поля мають бути заповнені</span>}
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="text2"></label>
                            <textarea placeholder=" опис товару 2" rows="4" cols="50" type="text" id="text2" {...register('text2', { required: true })} />
                            {errors.text2 && <span style={{ color: "red" }}>всі поля мають бути заповнені</span>}
                        </div>
                        {!isVariant ? (
                            <>
                                <div className={styles.item}>
                                    <label htmlFor="price"></label>
                                    <input className={styles.input} placeholder=" ціна товару" type="number" id="price" {...register('price', { required: true })} />
                                    {errors.price && <span style={{ color: "red" }}>всі поля мають бути заповнені</span>}
                                </div>

                                <div className={styles.photoBlock}>
                                    <div className={styles.item}>
                                        <label htmlFor="img1">Головне фото товару:</label>
                                        <input
                                            onChange={handleChangeFile}
                                            className={styles.inputPhoto}
                                            placeholder=" фото 1"
                                            type="file"
                                            id="img1"
                                        />
                                        {imgUrl && <img width={100} height={100} src={imgUrl} alt="product" />}
                                    </div>
                                    <div className={styles.item}>
                                        <label htmlFor="img2">Фото 2:</label>
                                        <input
                                            onChange={handleChangeFile2}
                                            className={styles.inputPhoto}
                                            placeholder=" фото 2"
                                            type="file"
                                            id="img2"
                                        />
                                        {imgUrl2 && <img width={100} height={100} src={imgUrl2} alt="product" />}
                                    </div>
                                    <div className={styles.item}>
                                        <label htmlFor="img3">Фото 3:</label>
                                        <input
                                            onChange={handleChangeFile3}
                                            className={styles.inputPhoto}
                                            placeholder=" фото 3"
                                            type="file"
                                            id="img3"
                                        />
                                        {imgUrl3 && <img width={100} height={100} src={imgUrl3} alt="product" />}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={styles.variantsContainer}>
                                <h3>Варіації товару</h3>
                                {variants.map((variant, index) => (
                                    <div key={index} className={styles.variantBlock}>
                                        <h4>Варіація {index + 1}</h4>
                                        <div className={styles.item}>
                                            <label>Назва варіації:</label>
                                            <input
                                                className={styles.input}
                                                placeholder="назва варіації"
                                                type="text"
                                                value={variant.title}
                                                onChange={(e) => handleVariantChange(index, 'title', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.item}>
                                            <label>Ціна:</label>
                                            <input
                                                className={styles.input}
                                                placeholder="ціна варіації"
                                                type="number"
                                                value={variant.price}
                                                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.photoBlock}>
                                            <div className={styles.item}>
                                                <label>Головне фото:</label>
                                                <input
                                                    onChange={(e) => handleVariantFileUpload(e, index, 'imgmain')}
                                                    className={styles.inputPhoto}
                                                    type="file"
                                                />
                                                {variant.imgmain && <img width={100} height={100} src={variant.imgmain} alt="variant" />}
                                            </div>
                                            <div className={styles.item}>
                                                <label>Фото 2:</label>
                                                <input
                                                    onChange={(e) => handleVariantFileUpload(e, index, 'imgsecond')}
                                                    className={styles.inputPhoto}
                                                    type="file"
                                                />
                                                {variant.imgsecond && <img width={100} height={100} src={variant.imgsecond} alt="variant" />}
                                            </div>
                                            <div className={styles.item}>
                                                <label>Фото 3:</label>
                                                <input
                                                    onChange={(e) => handleVariantFileUpload(e, index, 'imgthird')}
                                                    className={styles.inputPhoto}
                                                    type="file"
                                                />
                                                {variant.imgthird && <img width={100} height={100} src={variant.imgthird} alt="variant" />}
                                            </div>
                                        </div>
                                        {variants.length > 1 && (
                                            <button
                                                type="button"
                                                className={styles.removeVariantBtn}
                                                onClick={() => removeVariant(index)}
                                            >
                                                Видалити варіацію
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className={styles.addVariantBtn}
                                    onClick={addVariant}
                                >
                                    + Додати варіацію
                                </button>
                            </div>
                        )}
                        <button className={styles.button} type="submit">
                            {isEditing ? "ЗБЕРЕГТИ" : "СТВОРИТИ ТОВАР"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateGoods;