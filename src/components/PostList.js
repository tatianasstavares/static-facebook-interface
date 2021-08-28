import React, { Component } from "react";
import thaiane from "../assets/thaiane-souto.jpg";
import emmanuel from "../assets/emmanuel-souto.jpg";
import henrique from "../assets/henrique-schramm.jpg";
import thiago from "../assets/thiago-tavares.jpg";
import diego from "../assets/diego-fernandes.jpg";
import Post from "./Post";
import postStyle from "../style/Post.module.css"
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Thaiane Souto",
          avatar: thaiane,
        },
        date: "20 Aug 2021",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: diego,
            },
            content:
              "A Rocket está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive, 80% do nosso time de dev's é composto por alunos do bootcamp.Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord.",
          },
        ],
      },
      {
        id: 2,
        author: {
          name: "Emmanuel Souto",
          avatar: emmanuel,
        },
        date: "21 Aug 2021",
        content:
          "Olá pessoal! estou fazendo o bootcamp da Rocket, e estou gostando muito, vamos trocar ideias aqui?",
        comments: [
          {
            id: 1,
            author: {
              name: "Henrique Schramm",
              avatar: henrique,
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho a aminha API dos desafios contruída!",
          },
          {
            id: 2,
            author: {
              name: "Emmanuel Souto",
              avatar: emmanuel,
            },
            content: "Poxa, que maravilha! estou nesse exercício também!",
          },
        ],
      },
      {
        id: 3,
        author: {
          name: "Thiago Tavares",
          avatar: thiago,
        },
        date: "25 Aug 2021",
        content:
          "Pessoal, fiz o curso em 2019 e realmente fez toda diferença na minha carreira, recomendo!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: diego,
            },
            content:
              "Fico muito feliz em saber disso Thiago, obrigado pelo feedback!",
          },
          {
            id: 2,
            author: {
              name: "Thaiane Souto",
              avatar: thaiane,
            },
            content: "Olha só, me deu até mais motivação!Parabéns!",
          },
        ],
      },
    ],
  };

  render() {
    return this.state.posts.map((post) => {
      return (
          <Post key={post.id} post={post}/>
      );
    });
  }
}

export default PostList;
