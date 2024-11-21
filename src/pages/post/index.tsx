import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostContent, PostHeader, PostInfo, PostTitle, PostLinks } from "./styles";
import { Header } from "../../components/header";
import { ArrowLeft, Calendar, Chat, GithubLogo, Link as LinkIcon } from "@phosphor-icons/react";
import { Container } from "../../styles/global";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IssueDetails {
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
  };
  comments: number;
}

export const Post: React.FC = () => {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const [issue, setIssue] = useState<IssueDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const issueResponse = await api.get(`/repos/joao-ressel/github-blog/issues/${issueNumber}`);
        setIssue(issueResponse.data);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Erro ao carregar os dados");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [issueNumber]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!issue) {
    return <p>Post não encontrado</p>;
  }

  return (
    <>
      <Header />
      <Container>
        <PostHeader>
          <PostLinks>
            <Link to="/">
              <ArrowLeft size={18} width="bold" />
              VOLTAR
            </Link>
            <Link to={`https://github.com/joao-ressel/github-blog/issues/${issueNumber}`}>
              VER NO GITHUB
              <LinkIcon size={18} width="bold" />{" "}
            </Link>
          </PostLinks>
          <PostTitle>{issue.title}</PostTitle>
          <PostInfo>
            <p>
              <GithubLogo size={20} weight="fill" /> {issue.user.login}
            </p>
            <p>
              <Calendar size={20} weight="fill" />
              Há {formatDistanceToNow(new Date(issue.created_at), { locale: ptBR })}
            </p>
            <p>
              <Chat size={20} weight="fill" />
              {issue.comments} comentários
            </p>
          </PostInfo>
        </PostHeader>
        <PostContent>
          {/* Usando o react-markdown para renderizar o corpo do post */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
        </PostContent>
      </Container>
    </>
  );
};
