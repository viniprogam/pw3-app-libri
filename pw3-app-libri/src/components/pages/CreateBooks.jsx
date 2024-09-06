import React from "react";
import style from './CreateBooks.module.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () =>{
    return(
        <section className={style.create_book_container}>
            <h1>Cadastro de livros</h1>
            <Input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do seu livro aqui'
                text='Título do livro'
            />
            <Input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'
            />
            <Input
                type='text'
                name='txt_livro'
                placeHolder='Digite a descrição do livro'
                text='Descrição do livro'
            />
            <Select
                name='Categoria'
                text='Escolha a categoria de um livro '
            />
            <Button
                rotulo='Cadastrar'
            />
        </section>
    )
}

export default CreateBooks;