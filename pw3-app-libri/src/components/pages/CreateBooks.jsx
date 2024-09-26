import React from "react";
import {useState, useEffect} from 'react'

import style from './CreateBooks.module.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () =>{

    /*Recupera os dados de categorias da apirest */
    useEffect(() => {
        fetch('http://localhost:5000/listagemCateorias', {
            method:'GET', 
            headers:{
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                'Acess-Control-Allow-Headers':'*',
            }
        }).then(
            (resp)=>
                // console.log('Resposta:' + resp)
                resp.json()
        ).then(
            (data)=>
                console.log('DATA: ' + data.data[0].nome_categoria)
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[]);
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