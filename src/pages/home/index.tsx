import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { InputSearch, PostsList, ProfileContainer, ProfileInfo, Publications } from "./styles";
import { FolderOpen, GithubLogo, UsersThree, Link as Li } from "@phosphor-icons/react";
import { Container } from "../../styles/global";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface UserProfile {
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
  followers: number;
  bio: string;
  login: string;
}

interface Issue {
  id: number;
  title: string;
  body: string;
  number: number;
  created_at: string;
}

export const Home: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await api.get(`/users/joao-ressel`);
      setProfile(response.data);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      setError(`Erro ao carregar o perfil.${error}`);
    }
  };

  const fetchIssues = async (query = "") => {
    try {
      // Adiciona o filtro "is:issue" para garantir que a consulta retorne apenas issues
      const searchQuery = query
        ? `/search/issues?q=is:issue%20${query}%20repo:joao-ressel/github-blog`
        : `/search/issues?q=is:issue%20repo:joao-ressel/github-blog`;
  
      const response = await api.get(searchQuery);
      setIssues(response.data.items);
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
      setError("Erro ao carregar as publicações.");
    }
  };
  
  useEffect(() => {
    fetchProfile();
    fetchIssues();
  }, []);

  // Efeito com debouncing para busca
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      fetchIssues(search);
    }, 500);

    return () => clearTimeout(debounceTimeout); // Limpa timeout em cada digitação
  }, [search]);

  return (
    <div>
      <Header />
      <Container>
      {error && <p style={{ color: "red" }}>{error}</p>}
        {profile && (
          <ProfileContainer>
            <img src={profile.avatar_url} alt="Avatar" />
            <ProfileInfo>
              <div>
                <h2>{profile.name}</h2>
                <a href={profile.html_url}>
                  GitHub <Li />{" "}
                </a>
              </div>
              <p>{profile.bio}</p>

              <div>
                <p>
                  <GithubLogo size={20} weight="fill" /> {profile.login}
                </p>
                <p>
                  <UsersThree size={20} weight="fill" /> {profile.followers}
                </p>
                <p>
                  <FolderOpen size={20} weight="fill" /> {profile.public_repos}
                </p>
              </div>
            </ProfileInfo>
          </ProfileContainer>
        )}

        <Publications>
          <h3>Publicações</h3>
          <p>
            {issues.length} {issues.length == 1 ? "publicação" : "publicações"}
          </p>
        </Publications>

        <InputSearch
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar issues..."
        />

        <PostsList>
          {issues.map((issue) => (
            <Link key={issue.id} to={`/post/${issue.number}`}>
              <li>
                <div>
                  <h4>{issue.title}</h4>
                  <p>Há {formatDistanceToNow(new Date(issue.created_at), { locale: ptBR })}</p>
                </div>
                <p>{issue.body.substring(0, 220)}...</p>
              </li>
            </Link>
          ))}
        </PostsList>
      </Container>
    </div>
  );
};
