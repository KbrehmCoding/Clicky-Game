import React, { Component } from 'react';
// import CardData from '../../cards.json';
import './cards.css';
import { Card, CardTitle } from 'react-materialize';

class Cards extends Component {
    render() {
        return (
            <div class="cardsContainer">
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D1.jpeg"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D7.jpeg"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D8.jpeg"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D2.png"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D3.png"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D4.png"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D5.png"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D6.jpeg"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D9.jpeg"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D10.png"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D11.png"></CardTitle>}></Card>
                </div>
                <div class="cardDiv">
                    <Card header={<CardTitle image="../img/D12.jpg"></CardTitle>}></Card>
                </div>
            </div>
        );
    }
}

export default Cards;
