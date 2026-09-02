import type { IconType } from "react-icons";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiGo,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiQt,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiLangchain,
  SiGraphql,
  SiMqtt,
  SiRabbitmq,
  SiOpentelemetry,
  SiGit,
  SiGithub,
  SiGitlab,
  SiKubernetes,
  SiNginx,
  SiGnubash,
  SiGithubactions,
  SiDigitalocean,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiClaude,
  SiModelcontextprotocol,
  SiGooglebigquery,
  SiGrafana,
  SiDatadog,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import {
  LuNetwork,
  LuArrowLeftRight,
  LuWebhook,
  LuChartLine,
  LuCode,
  LuBrainCircuit,
  LuBot,
} from "react-icons/lu";

/**
 * Mapa nombre-de-skill -> icono. Marcas via Simple Icons; servicios AWS via
 * FaAws (Amazon removio sus iconos de Simple Icons); genericos via lucide.
 * Fallback: LuCode.
 */
const SKILL_ICONS: Record<string, IconType> = {
  // Lenguajes
  Python: SiPython,
  C: SiC,
  "C++": SiCplusplus,
  Go: SiGo,
  // Frameworks
  FastAPI: SiFastapi,
  Django: SiDjango,
  "Django REST Framework": SiDjango,
  Flask: SiFlask,
  pyQT5: SiQt,
  // IA & ML
  "Claude Code": SiClaude,
  MCP: SiModelcontextprotocol,
  RAG: LuBrainCircuit,
  "AI Agents": LuBot,
  "Agentes IA": LuBot,
  pandas: SiPandas,
  numpy: SiNumpy,
  matplotlib: LuChartLine,
  "scikit-learn": SiScikitlearn,
  TensorFlow: SiTensorflow,
  LangChain: SiLangchain,
  // Protocolos y herramientas
  gRPC: LuNetwork,
  GraphQL: SiGraphql,
  WebSocket: LuArrowLeftRight,
  Webhooks: LuWebhook,
  MQTT: SiMqtt,
  RabbitMQ: SiRabbitmq,
  OpenTelemetry: SiOpentelemetry,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  // Cloud AWS (umbrella brand icon)
  Lambda: FaAws,
  "API Gateway": FaAws,
  "Step Functions": FaAws,
  SQS: FaAws,
  SNS: FaAws,
  EC2: FaAws,
  ECR: FaAws,
  S3: FaAws,
  CloudWatch: FaAws,
  IAM: FaAws,
  AWS: FaAws,
  // DevOps
  Kubernetes: SiKubernetes,
  NGINX: SiNginx,
  "Bash/Shell Scripting": SiGnubash,
  "GitHub Actions": SiGithubactions,
  GithubActions: SiGithubactions,
  DigitalOcean: SiDigitalocean,
  Docker: SiDocker,
  "Docker Compose": SiDocker,
  Grafana: SiGrafana,
  Datadog: SiDatadog,
  // Bases de datos
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  BigQuery: SiGooglebigquery,
};

type SkillIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export default function SkillIcon({ name, size = 16, className }: SkillIconProps) {
  const Icon = SKILL_ICONS[name] ?? LuCode;
  return <Icon size={size} className={className} aria-hidden />;
}
