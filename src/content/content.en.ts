import type { SiteContent } from "./types";

export const contentEn: SiteContent = {
  "personal": {
    "name": "Roni Hernández",
    "profession": "Senior Software Engineer",
    "titleParts": [
      "Hello,",
      "I’m Roni Hernández,",
      "Senior Software Engineer."
    ],
    "roles": [
      {
        "kind": "work",
        "title": "Senior Software Engineer",
        "org": "Mercado Pago",
        "url": "https://www.mercadopago.com.mx/"
      },
      {
        "kind": "community",
        "title": "Co-Founder & Lead",
        "org": "UniconHub",
        "url": "https://uniconhub.org"
      }
    ],
    "about": "I’m a back-end software engineer with more than five years of experience in the tech industry, most of them at startups. I currently work at Mercado Pago, Mercado Libre’s fintech, on payment and tokenization systems that integrate with card networks such as Visa, Mastercard, and Elo. There I own the full cycle: designing, implementing, deploying, and operating several microservices in production, with tools like Grafana and Datadog.\n\nBefore that I spent a little over three years at Fairplay, a fintech startup, where I began maintaining the company monolith, which allowed me to understand the inherited systems in depth. Later I was assigned to the core-banking project, where, together with other engineers, we built the system from scratch, tackling challenges of efficiency, scalability, and system configuration. Over time I became Squad Leader of the back-end team.\n\nOne of the things I’ve enjoyed most about working on financial systems is tangibly seeing how the code I write directly impacts revenue, money transfers, and payment orders. It’s thrilling to watch a technical solution move large sums of money; it gives every project, and every line of code, a unique relevance.\n\nI’ve also had the opportunity to collaborate with Data Engineering, Data Science, Cybersecurity, Product, Sales, and DevOps, which gave me a holistic view of how the different areas of a tech company relate to each other and lets me deliver solutions better aligned with the company’s overall needs.\n\nBefore joining Fairplay, I worked at Scitum, Telmex’s cybersecurity unit. Although I have always been interested in infosec and networking, at that point in my career I felt the need to “push more code” and deepen my back-end knowledge. That led me to look for a more dynamic, development-oriented experience, and what better place than a startup, where technical challenges are continuous and varied.\n\nLately, artificial intelligence has become part of how I work. Within the team I’ve built things like an MCP connected to BigQuery, a Slack bot for querying information in natural language, RAG systems over our documentation, and Claude Code skills that help with code review. I like sharing what I learn through internal talks and demos, because these tools are worth more when the whole team adopts them.\n\nAs for my stack, I have extensive experience with Linux, networking, and AWS services (including Lambda, S3, SQS, SNS, Step Functions, CloudWatch, and IAM), plus deployment and automation tools such as Docker, Docker Compose, and GitHub Actions. I mainly work with Python and have built APIs and microservices with Django REST Framework, FastAPI, gRPC, and Flask. I’m also experienced with PostgreSQL, MongoDB, and Redis.\n\nOutside of work, I’m the co-founder and leader of UniconHub, a tech community a group of friends and I started in 2023 so that young people in tech can meet, share what they’re building, and learn together through meetups, projects, and a podcast. There I lead the community and, together with another teammate, the development of its platform.\n\nI deeply enjoy programming, even in my free time, and I’m always looking for new challenges and for opportunities to learn and build projects with people who share that enthusiasm.",
    "photo": "/ronihdz_en_proyectos.jpeg",
    "cv": {
      "spanish": "/cv.pdf",
      "english": "/cv_en.pdf"
    }
  },
  "contact": {
    "location": "Mexico City, Mexico",
    "form": {
      "title": "Send me a message",
      "subtitle": "Got a project in mind? I’d love to hear about it!",
      "submitText": "Send message",
      "fields": [
        {
          "name": "name",
          "type": "text",
          "placeholder": "Your name",
          "required": true
        },
        {
          "name": "email",
          "type": "email",
          "placeholder": "Your email",
          "required": true
        },
        {
          "name": "subject",
          "type": "text",
          "placeholder": "Subject",
          "required": true
        },
        {
          "name": "message",
          "type": "textarea",
          "placeholder": "Your message",
          "required": true,
          "rows": 5
        }
      ]
    }
  },
  "skills": {
    "featured": [
      "Python",
      "FastAPI",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Claude Code"
    ],
    "categories": [
      {
        "id": "languages",
        "title": "Programming Languages",
        "items": [
          {
            "name": "Python",
            "level": "Advanced",
            "years": 5
          },
          {
            "name": "C",
            "level": "Intermediate",
            "years": 3
          },
          {
            "name": "C++",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "Go",
            "level": "Basic",
            "years": 0
          }
        ]
      },
      {
        "id": "frameworks",
        "title": "Frameworks & Libraries",
        "items": [
          {
            "name": "FastAPI",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "Django",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "Django REST Framework",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "Flask",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "PyQt5",
            "level": "Intermediate",
            "years": 1
          }
        ]
      },
      {
        "id": "ai-ml",
        "title": "AI & Machine Learning",
        "items": [
          {
            "name": "Claude Code",
            "level": "Advanced",
            "years": 1
          },
          {
            "name": "MCP",
            "level": "Advanced",
            "years": 1
          },
          {
            "name": "RAG",
            "level": "Advanced",
            "years": 1
          },
          {
            "name": "AI Agents",
            "level": "Intermediate",
            "years": 1
          },
          {
            "name": "pandas",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "numpy",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "matplotlib",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "scikit-learn",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "TensorFlow",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "LangChain",
            "level": "Intermediate",
            "years": 2
          }
        ]
      },
      {
        "id": "protocols",
        "title": "Protocols & Tools",
        "items": [
          {
            "name": "gRPC",
            "level": "Advanced",
            "years": 2
          },
          {
            "name": "GraphQL",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "WebSocket",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "Webhooks",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "MQTT",
            "level": "Intermediate",
            "years": 1
          },
          {
            "name": "RabbitMQ",
            "level": "Intermediate",
            "years": 1
          },
          {
            "name": "OpenTelemetry",
            "level": "Basic",
            "years": 1
          },
          {
            "name": "Git",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "GitHub",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "GitLab",
            "level": "Intermediate",
            "years": 1
          }
        ]
      },
      {
        "id": "cloud-aws",
        "title": "AWS Cloud",
        "items": [
          {
            "name": "Lambda",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "API Gateway",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "Step Functions",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "SQS",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "SNS",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "EC2",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "ECR",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "S3",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "CloudWatch",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "IAM",
            "level": "Intermediate",
            "years": 2
          }
        ]
      },
      {
        "id": "devops",
        "title": "DevOps",
        "items": [
          {
            "name": "Kubernetes",
            "level": "Basic",
            "years": 0
          },
          {
            "name": "NGINX",
            "level": "Intermediate",
            "years": 1
          },
          {
            "name": "Bash/Shell scripting",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "GitHub Actions",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "DigitalOcean",
            "level": "Intermediate",
            "years": 1
          },
          {
            "name": "Docker",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "Docker Compose",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "Grafana",
            "level": "Intermediate",
            "years": 1
          },
          {
            "name": "Datadog",
            "level": "Intermediate",
            "years": 1
          }
        ]
      },
      {
        "id": "databases",
        "title": "Databases",
        "items": [
          {
            "name": "PostgreSQL",
            "level": "Advanced",
            "years": 3
          },
          {
            "name": "MongoDB",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "Redis",
            "level": "Intermediate",
            "years": 2
          },
          {
            "name": "BigQuery",
            "level": "Intermediate",
            "years": 1
          }
        ]
      }
    ]
  },
  "career": [
    {
      "id": "mercado-pago",
      "kind": "work",
      "current": true,
      "org": "Mercado Pago · Mercado Libre",
      "url": "https://www.mercadopago.com.mx/",
      "role": "Senior Software Engineer",
      "period": "Aug 2025 – present",
      "location": "Mexico City · Hybrid",
      "summary": "Payment and tokenization systems integrated with card networks such as Visa, Mastercard, and Elo. Full cycle of several microservices: design, implementation, deployment, observability with Grafana and Datadog, and production operations. Alongside, AI tools for the team: an MCP over BigQuery, a Slack bot, RAGs over our documentation, and Claude Code skills.",
      "tags": [
        "Payments",
        "Tokenization",
        "Microservices",
        "Grafana",
        "Datadog",
        "AI"
      ],
      "start": "2025-08"
    },
    {
      "id": "uniconhub",
      "kind": "community",
      "current": true,
      "org": "UniconHub",
      "url": "https://uniconhub.org",
      "role": "Co-Founder",
      "period": "Nov 2023 – present",
      "location": "Mexico City · Remote",
      "summary": "Tech community a group of friends and I started. I coordinate the community and, together with another teammate, the development of the platform we use to run meetups, projects, and the podcast.",
      "tags": [
        "Community",
        "Meetups",
        "Product"
      ],
      "start": "2023-11"
    },
    {
      "id": "fairplay",
      "kind": "work",
      "current": false,
      "org": "Fairplay",
      "url": "https://www.getfairplay.com/",
      "role": "Back-end Developer → Squad Leader Back-end",
      "period": "Apr 2022 – Aug 2025",
      "location": "Mexico City",
      "summary": "Fintech providing financing for businesses and digital merchants. I joined as a Junior Back-end Developer on the monolith (Django REST Framework), adding automated tests, private Python packages, and cron jobs to automate internal processes. We then built the core banking system with microservices (FastAPI, gRPC, AWS Lambda, S3, SQS, SNS), and I designed the microservices orchestrator for a full data migration. From 2024 I was Squad Leader of the back-end team: I took part in the architecture of financial modules, in standardizing how we build APIs with FastAPI, and presented technical research to the engineering team.",
      "tags": [
        "Python",
        "FastAPI",
        "gRPC",
        "AWS Lambda",
        "Django REST Framework",
        "Leadership"
      ],
      "start": "2022-04",
      "end": "2025-08"
    },
    {
      "id": "scitum",
      "kind": "work",
      "current": false,
      "org": "Scitum · Telmex",
      "url": "https://www.scitum.com.mx/",
      "role": "Cybersecurity",
      "period": "Before Fairplay",
      "location": "Mexico City",
      "summary": "Telmex’s cybersecurity unit. Information security and networking, before making the jump to back-end development.",
      "tags": [
        "Cybersecurity",
        "Networking",
        "Linux"
      ]
    },
    {
      "id": "unam",
      "kind": "education",
      "current": false,
      "org": "Faculty of Engineering, UNAM",
      "url": "https://www.ingenieria.unam.mx/",
      "role": "Programming course instructor · Computing Center",
      "period": "2019 – 2022",
      "location": "Mexico City",
      "summary": "Instructor for basic Python and lead instructor for pre-intermediate Python, data processing with Python, and basic C; I designed the syllabi, evaluation metrics, and assessments. Earlier, at BRAIN Artificial Intelligence, I learned to program machine-learning algorithms and build data-collection devices, and I led Delphia, an artificial-intelligence study group.",
      "tags": [
        "Python",
        "C",
        "Teaching",
        "Machine Learning"
      ],
      "start": "2019-11",
      "end": "2022-06"
    }
  ],
  "community": {
    "name": "UniconHub",
    "url": "https://uniconhub.org",
    "logo": "/uniconhub-mark.png",
    "role": "Co-Founder · Community Lead",
    "tagline": "Build. Connect. Repeat.",
    "description": "UniconHub is a tech community that a group of friends and I started in 2023 in Mexico City, with members in Colombia and Argentina as well. The idea is simple: young people in tech meet, share what they’re building, and learn together. We run in-person meetups every six to eight weeks, a podcast with stories from the community, a monthly 5 km Social Run, open-source projects, and an invitation-based blog.\n\nWe are nine co-founders. I coordinate the community and, together with another teammate, lead the development of the platform we want to use to make it easier to discover events, communities, and projects.",
    "pillars": [
      {
        "id": "meetups",
        "label": "Meetups"
      },
      {
        "id": "podcast",
        "label": "Podcast"
      },
      {
        "id": "socialrun",
        "label": "Social Run"
      },
      {
        "id": "projects",
        "label": "Projects"
      },
      {
        "id": "blog",
        "label": "Blog"
      },
      {
        "id": "networking",
        "label": "Networking"
      },
      {
        "id": "reading",
        "label": "Reading circle"
      },
      {
        "id": "hackathon",
        "label": "Hackathon"
      }
    ],
    "video": {
      "url": "https://res.cloudinary.com/dktvzpt6a/video/upload/q_auto/team_video_fcuhpv.mp4",
      "poster": "https://res.cloudinary.com/dktvzpt6a/video/upload/so_52,w_720,q_auto/team_video_fcuhpv.jpg",
      "caption": "A UniconHub meetup and the founding team, in 60 seconds."
    },
    "photos": [
      {
        "src": "/uniconhub-meetup-auditorium.jpg",
        "alt": "Attendees of a UniconHub Devs Meetup in an auditorium",
        "caption": "Devs Meetup"
      },
      {
        "src": "/uniconhub-team.jpg",
        "alt": "UniconHub founding team on a rooftop",
        "caption": "Founding team"
      },
      {
        "src": "/uniconhub-meetup-office.jpg",
        "alt": "UniconHub community waving goodbye after a meetup",
        "caption": "After a meetup"
      }
    ],
    "social": {
      "instagram": "https://www.instagram.com/unicon.hub/",
      "linkedin": "https://www.linkedin.com/company/uniconhub/",
      "youtube": "https://www.youtube.com/@UniConHub"
    }
  },
  "experiences": [
    {
      "id": "swift-hackathon-2024",
      "title": "Winners of the Swift Change Makers Hackathon 2024",
      "description": "Hackathon held in Monterrey that brought together the best teams from across Mexico, each having previously won local hackathons to earn a spot. My team and I were selected to participate and took first place in FEMSA’s challenge. During the event we developed **OXXO LINK**, an innovative solution designed to facilitate neighbor collaboration and streamline product purchases at OXXO. The project grew from an intense team effort where everyone contributed ideas that evolved into a solid and effective proposal.\n\nOur solution impressed the judges so much that they started using our coined term *los paros* to describe the project’s dynamic. Winning the FEMSA challenge was exciting and rewarding, especially given the caliber of the other teams. Competing—and prevailing—at an event of this scale is an experience I’ll always remember.",
      "date": "2024-03-15",
      "location": "Monterrey, Mexico",
      "type": "hackathon",
      "award": "1st Place",
      "media": {
        "url": "https://res.cloudinary.com/dktvzpt6a/video/upload/v1726351947/website/d2hmldjtasmrygarimjn.mp4",
        "type": "video"
      },
      "tags": [
        "Hackathon",
        "FEMSA",
        "OXXO",
        "Innovation"
      ]
    },
    {
      "id": "nasa-space-apps-2023",
      "title": "Winners of the NASA Space Apps Challenge 2023",
      "description": "The NASA Space Apps Challenge 2023 is a global hackathon inviting participants worldwide to solve science-and-space challenges using open data from NASA and its partners. In the Mexico City edition, my team **AstroFire** earned first place with our innovative proposal **“Sensores de Muerte” (Death Sensors)**. The project consisted of a network of sensors strategically placed in forest areas to detect wildfire speed and direction. The sensors communicated via LoRa, creating a local network that enabled early alerts and facilitated rapid response to forest fires. Although it was an initial prototype, we made it fully functional. We also built the hardware capturing the data plus the website and mobile app, allowing us to showcase a prototype that impressed judges with its effectiveness and potential despite being a preliminary version.",
      "date": "2023-10-07",
      "location": "Mexico City, Mexico",
      "type": "hackathon",
      "award": "1st Place",
      "media": {
        "url": "https://res.cloudinary.com/dktvzpt6a/video/upload/v1726354821/website/jjnn6tvpi2pqn5ynomyv.mp4",
        "type": "video"
      },
      "tags": [
        "NASA",
        "Space",
        "IoT",
        "Environmental"
      ]
    },
    {
      "id": "unam-telecom-talk",
      "title": "Telecommunications Congress – UNAM Faculty of Engineering",
      "description": "As part of the lecture series of the Telecommunications Department at UNAM’s Faculty of Engineering, I had the honor of being invited as a speaker by Dr. Luis Francisco García Jiménez (Communications Networks professor). During the talk I covered key topics such as the **Internet of Things**, **software development**, and some of my **open-source projects**. It was a rewarding experience to share my knowledge and passion with an audience interested in those technological fields.",
      "date": "2023-11-15",
      "location": "UNAM, Mexico City",
      "type": "conference",
      "award": null,
      "media": {
        "url": "https://res.cloudinary.com/dktvzpt6a/video/upload/v1726370258/website/mbs9zoqpmpgycc4velq9.mp4",
        "type": "video"
      },
      "tags": [
        "IoT",
        "Software Development",
        "Open Source",
        "UNAM"
      ]
    },
    {
      "id": "conaces-acapulco",
      "title": "CONACES 2023 – Acapulco",
      "description": "My friends and I had the honor of being invited as speakers at **CONACES 2023**, Mexico’s most important space event, organized by the **Mexican Space Agency**. We shared the stage with brilliant figures such as Rodolfo Neri Vela—the first Mexican astronaut—along with other experts from the space sector. Presenting our projects at an event of such magnitude was an incredible opportunity to exchange ideas and learn from leading industry voices.",
      "date": "2023-09-20",
      "location": "Acapulco, Mexico",
      "type": "conference",
      "award": null,
      "media": {
        "url": "https://res.cloudinary.com/dktvzpt6a/video/upload/v1726370338/website/bgt0ke4ryyargaehljek.mp4",
        "type": "video"
      },
      "tags": [
        "Space",
        "Mexican Space Agency",
        "Innovation"
      ]
    }
  ],
  "projects": [
    {
      "id": "ai_code_review_claude_code",
      "title": "Code-review skills for Claude Code",
      "description": "A set of Claude Code skills that help review code: they validate commits, compare the PR description with the actual diff, and check the team’s architecture rules. They can connect to MCPs for extra context.",
      "longDescription": "Claude Code skills meant for anyone on the team to install and use in their daily review flow: they validate commit quality, compare the PR description against the real diff, check the team’s architecture rules, and can connect to MCPs to enrich the context.",
      "technologies": [
        "Claude Code",
        "Skills",
        "MCP",
        "Git"
      ],
      "category": "AI tools",
      "status": "Internal use",
      "featured": true,
      "links": {},
      "dateCreated": "2025-06-01",
      "dateUpdated": "2026-09-01"
    },
    {
      "id": "ai_slack_agent_bigquery_mcp",
      "title": "Slack bot for querying BigQuery",
      "description": "Slack bot that answers natural-language questions about operational and audit information through a custom MCP connected to BigQuery. Those queries used to require manual access and hand-written SQL.",
      "longDescription": "Slack bot that turns natural-language questions into BigQuery queries through a custom MCP and returns answers with context. It replaces manual access and hand-written queries for operational and audit information.",
      "technologies": [
        "MCP",
        "BigQuery",
        "Slack",
        "LLMs",
        "Python"
      ],
      "category": "AI tools",
      "status": "Internal use",
      "featured": true,
      "links": {},
      "dateCreated": "2025-06-01",
      "dateUpdated": "2026-09-01"
    },
    {
      "id": "rag_technical_knowledge",
      "title": "RAG over technical documentation",
      "description": "RAG systems for querying, with AI, technical documentation spread across several repositories. Includes designing the knowledge domains and preparing the documents.",
      "longDescription": "RAG systems so that technical documentation spread across several repositories and internal sources can be queried with AI. Includes designing the knowledge domains and preparing the documents to improve answer quality.",
      "technologies": [
        "RAG",
        "Embeddings",
        "Vector databases",
        "LLMs"
      ],
      "category": "AI tools",
      "status": "Internal use",
      "featured": true,
      "links": {},
      "dateCreated": "2025-06-01",
      "dateUpdated": "2026-09-01"
    },
    {
      "id": "ai_document_processing_pipeline",
      "title": "Document processing for RAG",
      "description": "Experiment with Docling, OCR, and Markdown to convert complex technical documentation, including text inside diagrams, into a format a RAG can use. I compared alternatives, measured results, and documented it for the team.",
      "longDescription": "Experimental pipeline to convert complex technical documentation into structured, RAG-ready Markdown, using Docling and OCR to recover even the text inside diagrams. I compared alternatives, measured the results, and documented the conclusions for the team.",
      "technologies": [
        "Docling",
        "OCR",
        "Markdown",
        "RAG",
        "Python"
      ],
      "category": "AI tools",
      "status": "Experiment",
      "featured": false,
      "links": {},
      "dateCreated": "2025-06-01",
      "dateUpdated": "2026-09-01"
    },
    {
      "id": "ai_team_learning",
      "title": "Automatic questions for team learning",
      "description": "System that generates questions from internal documentation, posts them to Slack, evaluates the answers, and gives feedback. A way to review the documentation continuously.",
      "longDescription": "System that generates questions from internal documentation, posts them to Slack, evaluates each person’s answers with AI, and returns feedback, as a way to review the documentation continuously.",
      "technologies": [
        "LLMs",
        "Slack",
        "Automation",
        "Python"
      ],
      "category": "AI tools",
      "status": "Internal use",
      "featured": false,
      "links": {},
      "dateCreated": "2025-06-01",
      "dateUpdated": "2026-09-01"
    },
    {
      "id": "aws_lambda_fastapi_template",
      "title": "AWS Lambda FastAPI Template",
      "description": "Professional template for building serverless REST APIs using FastAPI, Docker and AWS Lambda.",
      "longDescription": "AWS Lambda FastAPI Template is a professional template designed to develop modular and scalable serverless REST APIs. It uses FastAPI as the main framework, deployed on AWS Lambda using Docker containers. It integrates modular architecture, real database testing and a complete automated CI/CD flow through GitHub Actions. The template allows defining data models with SQLAlchemy and Pydantic, supporting databases like PostgreSQL and MongoDB. Additionally, it leverages Mangum as an ASGI adapter for Lambda and supports cloud-native microservices, ideal for modern cloud-oriented projects.",
      "technologies": [
        "python",
        "testing",
        "docker",
        "template",
        "sqlalchemy",
        "cloud",
        "microservices",
        "mongodb",
        "aws-lambda",
        "serverless",
        "rest-api",
        "postgresql",
        "ci-cd",
        "github-actions",
        "pydantic",
        "fastapi",
        "mangum"
      ],
      "category": "backend",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/aws-lambda-fastapi-template",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "aws_lambda_go",
      "title": "AWS Lambda Go",
      "description": "REST API built with Go and Gin Framework for hybrid execution in AWS Lambda.",
      "longDescription": "AWS Lambda Go is a project that implements a REST API using Go language along with the Gin framework. Its architecture allows hybrid execution, where Lambda functions are used in serverless production environments, while exposing a traditional HTTP server for local development. The project uses Docker containers for function packaging, integration with API Gateway for HTTP request routing, and complete automated CI/CD flows through GitHub Actions. Additionally, it supports microservices deployment, serverless models, and cloud-native architectures under AWS.",
      "technologies": [
        "go",
        "docker",
        "golang",
        "microservices",
        "aws-lambda",
        "serverless",
        "containers",
        "api-gateway",
        "rest-api",
        "ci-cd",
        "cloud-computing",
        "gin-framework",
        "github-actions"
      ],
      "category": "backend",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/aws-lambda-go",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "voice_ai_assistant_python",
      "title": "VOICE AI Assistant Python",
      "description": "AI voice assistant for real-time phone calls, built with Python, Twilio and OpenAI Realtime API.",
      "longDescription": "VOICE AI Assistant Python is a voice assistant based on artificial intelligence designed to handle real-time phone conversations. Implemented with Python and FastAPI, it uses OpenAI's Realtime API for transcription and response generation during calls, while Twilio manages call routing and handling. The system supports bidirectional audio flows, processing incoming voice and responding dynamically. Deployment is containerized with Docker, allowing a flexible environment for testing and production. This project integrates advanced conversational AI capabilities, real-time communication and phone call control.",
      "technologies": [
        "python",
        "docker",
        "real-time",
        "twilio",
        "voice-assistant",
        "conversational-ai",
        "fastapi",
        "openai-api",
        "gpt-4o"
      ],
      "category": "ai",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/voice-ai-asistant-python",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "telegram_connector",
      "title": "Telegram Connector",
      "description": "Complete solution to integrate applications with Telegram bots through bidirectional communication.",
      "longDescription": "Telegram Connector is a solution designed to integrate backend applications with the Telegram bot platform, enabling real-time bidirectional communication for sending and receiving messages. Built on Python and FastAPI, it exposes REST endpoints and webhooks that handle event reception from Telegram and emission of automated or assisted responses. It uses Docker for containerization, PostgreSQL as persistence database and supports integration with modular architectures for advanced messaging systems. It's ideal as a connector microservice within multichannel platforms or CRM with messaging bot support.",
      "technologies": [
        "python",
        "api",
        "docker",
        "telegram",
        "connector",
        "integration",
        "telegram-bot",
        "rest-api",
        "webhook",
        "postgresql",
        "fastapi"
      ],
      "category": "backend",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/telegram-connector",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "cacpy",
      "title": "CACPY",
      "description": "Automatic grading tool for Python programs in Google Classroom.",
      "longDescription": "CACPY is a tool developed in Python that automates the grading of programs submitted in Google Classroom. It uses PyQt5 to provide a friendly graphical interface, integrates access to Google Drive and Google Classroom for downloading, reviewing and automatic return of assignments, along with their individual feedback. Additionally, it incorporates nbgrader as an evaluation engine for Jupyter notebooks and handles mass correction flows through automation processes. It's designed as a support system for teachers, reducing manual review time and improving the efficiency of the educational process.",
      "technologies": [
        "python",
        "classroom",
        "education",
        "gui",
        "automation",
        "pyqt5",
        "google-drive",
        "nbgrader",
        "google-classroom",
        "auto-grading",
        "teacher-tools",
        "grading-tools"
      ],
      "category": "education",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/CACPY",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "opentelemetry_microservices",
      "title": "OpenTelemetry Microservices",
      "description": "Microservices in Python with distributed observability using OpenTelemetry and Jaeger.",
      "longDescription": "This project implements a microservices architecture in Python aimed at calculating averages in a distributed manner. Each microservice works collaboratively leveraging parallel processing and distributed systems techniques. OpenTelemetry has been integrated for distributed tracing, allowing complete visibility of request flow through different components. Additionally, it uses Jaeger as a trace backend, offering advanced observability capabilities and facilitating detection of bottlenecks or latency issues. Service deployment and orchestration is done through Docker, and FastAPI is used as the main framework to expose the microservices APIs.",
      "technologies": [
        "Python",
        "API",
        "Docker",
        "Distributed Systems",
        "Microservices",
        "Observability",
        "Distributed Tracing",
        "Python Multiprocessing",
        "Jaeger",
        "FastAPI",
        "OpenTelemetry"
      ],
      "category": "Distributed Systems",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/opentelemtry-microservices",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "central_var_rxd",
      "title": "Central Var RXD",
      "description": "CLI for secure management of environment variables with GPG encryption and multi-environment support.",
      "longDescription": "Central Var RXD is a command-line tool (CLI) developed in Python, focused on secure environment variable management. It allows handling configurations for multiple environments (development, staging, production) in an organized way, ensuring value confidentiality through GPG encryption. Additionally, it facilitates integration into DevOps and CI/CD workflows by using Makefile for automation. Thanks to its security focus, it supports centralized secrets management, secure storage, and versioning of sensitive configurations for different phases of application lifecycles.",
      "technologies": [
        "Python",
        "CLI",
        "Security",
        "DevOps",
        "Encryption",
        "Makefile",
        "GPG",
        "Environment Variables",
        "Command Line Tool",
        "Development Tools",
        "Secure Storage",
        "Secrets Management",
        "Env Management"
      ],
      "category": "Development Tools",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/central_var_rxd",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "git_archive_action",
      "title": "Git Archive Action",
      "description": "GitHub Action to persist workflow artifacts in dedicated branches within the same repository.",
      "longDescription": "Git Archive Action is a GitHub Action designed to persistently store artifacts generated by continuous integration workflows, such as test coverage reports. The artifacts are saved in a dedicated Git branch within the same repository, allowing decoupling of artifact storage from the main source code history. This provides a historical and accessible record of each workflow execution's results, facilitating audits, code quality analysis and maintainability in complex CI/CD environments.",
      "technologies": [
        "Git",
        "DevOps",
        "CI/CD",
        "Artifacts",
        "Workflow Automation",
        "GitHub Actions",
        "Persist Artifacts"
      ],
      "category": "Workflow Automation",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/git-archive-action",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "push_to_dockerhub_action",
      "title": "Push to DockerHub Action",
      "description": "GitHub Action to automate versioning and deployment of images to Docker Hub with environment control.",
      "longDescription": "Push to DockerHub Action is a highly configurable GitHub Action that automates the process of versioning and deploying Docker images to Docker Hub. The action allows mapping Git branches to different environments (development, staging, production), facilitating robust and controlled CI/CD workflows. It also supports creating rollback tags, which enables safely reverting versions in case of failures. Its design is oriented towards simplifying image handling, avoiding manual errors in deployment pipelines and ensuring consistency in execution environments.",
      "technologies": [
        "Docker",
        "DevOps",
        "Automation",
        "CI/CD",
        "Docker Hub",
        "GitHub Actions"
      ],
      "category": "Deployment Automation",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/push-to-dockerhub-action",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "push_to_digitalocean_action",
      "title": "Push to DigitalOcean Action",
      "description": "GitHub Action to build and publish Docker images to DigitalOcean Container Registry with environment control.",
      "longDescription": "Push to DigitalOcean Action is a customizable GitHub Action designed to automate the process of building and deploying Docker images to DigitalOcean's Container Registry. It allows mapping Git branches to specific environments (development, staging, production), facilitating controlled versioning and deployment strategies. Additionally, it supports generating rollback tags for easily reverting versions in case of failures. This action is ideal for CI/CD pipelines seeking seamless integration with DigitalOcean infrastructure, reducing manual intervention and improving container deployment reliability.",
      "technologies": [
        "Docker",
        "DigitalOcean",
        "DevOps",
        "Automation",
        "CI/CD",
        "Container Registry",
        "GitHub Actions"
      ],
      "category": "Deployment Automation",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/push-to-digitalocean-action",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "git_archive_action_testing_example",
      "title": "Git Archive Action Testing Example",
      "description": "Practical example of CI/CD integrating multiple services and artifact storage with Git Archive Action.",
      "longDescription": "Git Archive Action Testing Example is a demonstration repository that realistically integrates a complete CI/CD flow. It runs integration tests against multiple services (PostgreSQL, MongoDB, Redis) raised within a Docker container, generating automated test coverage reports. Finally, it uses the 'git-archive-action' GitHub Action to persistently store these test artifacts within dedicated repository branches. This example allows visualizing the combined use of testing tools, pipeline automation and historical report storage within a distributed service environment.",
      "technologies": [
        "Testing",
        "Docker",
        "Redis",
        "DevOps",
        "Demo",
        "MongoDB",
        "Example",
        "PostgreSQL",
        "CI/CD",
        "GitHub Actions"
      ],
      "category": "Workflow Automation",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/git-archive-action-testing-example",
        "documentation": null
      },
      "dateCreated": "2025-06-12",
      "dateUpdated": "2025-06-12"
    },
    {
      "id": "roni_website",
      "title": "Roni Website",
      "description": "Personal website built with FastHTML and modern responsive design.",
      "longDescription": "Roni Website is a personal website developed using the FastHTML framework, which allows a modular and efficient structure for creating web pages. The project implements a fully responsive design, optimized for different devices, and integrates organized sections to showcase professional experiences, technical skills, completed projects and a contact form. Additionally, it employs advanced CSS animations to enhance visual experience and user interaction. The solution combines technologies such as JavaScript, Python, HTML5, CSS3 and FastHTML, offering a professional and modern deployment ideal for personal portfolios.",
      "technologies": [
        "JavaScript",
        "Python",
        "HTML5",
        "CSS3",
        "FastHTML"
      ],
      "category": "portfolio-website",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": "https://ronihdz.com/",
        "github": "https://github.com/ronihdzz/roni-website",
        "documentation": null
      },
      "dateCreated": "2025-06-13",
      "dateUpdated": "2025-06-13"
    },
    {
      "id": "web_personal_django",
      "title": "Personal Web Django",
      "description": "Complete personal website developed in Django with portfolio, blog and automatic contact system.",
      "longDescription": "Personal Web Django is a professionally developed personal website using the Django framework. The application includes a professional portfolio to showcase projects and certifications, a personal blog to publish articles and work experiences, as well as an automated contact system that facilitates communication with visitors. Additionally, it features a complete Django admin panel for managing dynamic content, posts, contact forms and data administration. The deployment is done on PythonAnywhere and uses technologies such as Python, MySQL, Django, HTML, CSS, email automation and responsive web design, offering an organized, professional and easily maintainable experience.",
      "technologies": [
        "Python",
        "Django",
        "MySQL",
        "HTML",
        "CSS",
        "PythonAnywhere",
        "Email Automation"
      ],
      "category": "portfolio-website",
      "status": "Completed",
      "featured": false,
      "links": {
        "github": "https://github.com/ronihdzz/web-personal-django",
        "documentation": null
      },
      "dateCreated": "2025-06-13",
      "dateUpdated": "2025-06-13"
    },
    {
      "id": "simon_dice_troni",
      "title": "Simon Says Troni",
      "description": "Simon Says memory game with Arduino, LEDs, buttons and sound.",
      "longDescription": "Simon Says Troni is an interactive recreation of the classic Simon Says game, programmed in C for an Arduino UNO board. The system uses four colored LEDs and four push buttons to display and capture the light sequences that the user must memorize and repeat. It incorporates a piezoelectric buzzer with volume control for sound effects and reward melodies when completing levels. The firmware implements pseudorandom sequence generation, various scalable difficulty levels and serial communication for debugging or external monitoring from a serial monitor. This project demonstrates physical computing concepts, digital I/O handling, non-blocking timing and embedded game design, being ideal for educational purposes in electronics and IoT.",
      "technologies": [
        "C",
        "Arduino",
        "LEDs",
        "Push buttons",
        "Piezoelectric buzzer",
        "Serial communication",
        "Electronics",
        "Embedded systems"
      ],
      "category": "Physical Computing and IoT",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/simon-dice-troni",
        "documentation": null
      },
      "dateCreated": "2025-06-13",
      "dateUpdated": "2025-06-13"
    },
    {
      "id": "iot_domotica",
      "title": "IoT Home Automation",
      "description": "Home automation system with Raspberry Pi, PyQt5 and microcontrollers.",
      "longDescription": "IoT Home Automation is a home control and monitoring platform based on Raspberry Pi with a desktop graphical interface developed in PyQt5. It allows turning on and adjusting RGB lighting, activating a fan, detecting fires through flame sensors, programming alarms and managing tasks from an intuitive GUI. The system communicates with Arduino and ESP-32 microcontrollers through serial ports and/or Wi-Fi to operate external peripherals, while the Raspberry Pi orchestrates business logic, event cron and state logging. The application demonstrates hardware and software integration in IoT environments, GPIO handling, serial communication and wireless networks, as well as responsive user interface design for home automation.",
      "technologies": [
        "Python",
        "PyQt5",
        "Raspberry Pi",
        "Arduino",
        "ESP-32",
        "GPIO",
        "RGB LEDs",
        "Flame sensors",
        "IoT"
      ],
      "category": "Home Automation and IoT",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/IoT_domotica",
        "documentation": null
      },
      "dateCreated": "2025-06-13",
      "dateUpdated": "2025-06-13"
    },
    {
      "id": "metro_maps_cdmx",
      "title": "Metro Maps CDMX",
      "description": "Desktop application that displays the entire Mexico City Metro network and calculates the shortest route between stations.",
      "longDescription": "Metro Maps CDMX is a desktop application developed in Python 3 with PyQt5 for the graphical interface. It models the complete network of Mexico City's Metro Public Transportation System using NetworkX, representing each station as a node and sections as weighted edges. It implements shortest path search algorithms (Dijkstra and A*) to determine the optimal route between two stations, considering transfers and distances. It adopts a client-server architecture: the GUI sends calculation requests to the server via sockets and receives the resulting route to render it on an interactive canvas. This decoupled flow facilitates testing, maintenance and possible distributed deployments. The project serves as an educational tool in graph algorithms and as support for urban travel planning, and can run on Windows, macOS and Linux without external dependencies apart from Python and the mentioned libraries.",
      "technologies": [
        "Python 3",
        "PyQt5",
        "NetworkX",
        "Dijkstra Algorithm",
        "A* Algorithm",
        "TCP/IP Sockets"
      ],
      "category": "Transport and Mobility",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/metro-maps-cdmx",
        "documentation": null
      },
      "dateCreated": "2025-06-13",
      "dateUpdated": "2025-06-13"
    },
    {
      "id": "circuirtos_rf_punto_q",
      "title": "RF Circuits Q Point",
      "description": "Educational tool for finding the Q operating point of FET transistors (JFET and MOSFET) with different methods.",
      "longDescription": "RF Circuits Q Point is an educational tool developed in Python, designed to calculate the Q operating point of field-effect transistors (FET), including JFET and MOSFET, under various bias configurations. The application implements multiple analysis methods: iterative, analytical and graphical, allowing the study and comparison of results in different electronic design scenarios. The workflow is built on Jupyter notebooks, where detailed examples, numerical explanations, analytical solutions and interactive graphical representations are included. It's ideal for electronic engineering students and professionals looking to understand bias circuit behavior, RF analysis, and transistor design optimization in educational and electronic simulation applications.",
      "technologies": [
        "Python",
        "Jupyter Notebook",
        "Numerical methods",
        "Circuit analysis",
        "Graphical analysis",
        "Electronic engineering"
      ],
      "category": "Education and Electronic Simulation",
      "status": "Completed",
      "featured": false,
      "links": {
        "demo": null,
        "github": "https://github.com/ronihdzz/Circuitos-RF-punto-Q",
        "documentation": null
      },
      "dateCreated": "2025-06-13",
      "dateUpdated": "2025-06-13"
    }
  ],
  "seo": {
    "title": "Roni Hernández · Senior Software Engineer",
    "description": "Back-end software engineer at Mercado Pago (payment and tokenization systems). Previously core banking at Fairplay and cybersecurity at Scitum/Telmex. Python, AWS, microservices, and AI tools (Claude Code, MCP, RAG). Co-founder of UniconHub.",
    "keywords": [
      "Roni Hernández",
      "Senior Software Engineer",
      "backend",
      "Mercado Pago",
      "Fairplay",
      "payment systems",
      "Python",
      "FastAPI",
      "AWS",
      "microservices",
      "Claude Code",
      "MCP",
      "RAG",
      "UniconHub",
      "portfolio"
    ]
  }
};
