# Robot Control Service

A Node.js API server for controlling robot operations, including cabin management and settings retrieval.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on `http://localhost:3000` (or your configured PORT).

## API Endpoints

### Cabin Control

**Open cabin:**
```
POST /api/robot/{robotId}/cabin/open
```

**Close cabin:**
```
POST /api/robot/{robotId}/cabin/close
```

### Settings

**Get robot settings:**
```
GET /api/robot/{robotId}/settings
```

Replace `{robotId}` with your robot's ID (e.g., `4E0025230001`).

## Project Structure

```
├── server.js              # Entry point
├── src/
│   ├── app.js            # Express app configuration
│   ├── api/              # Route handlers
│   ├── config/           # Configuration files
│   ├── services/         # Business logic
│   └── utils/            # Utility functions
├── .env                  # Environment variables
└── package.json          # Dependencies
```

## Dependencies

- **express** - Web framework
- **axios** - HTTP client
- **dotenv** - Environment variable management
- **cheerio** - Web scraping
- **p-limit** - Promise concurrency control

## License

NIPPYBOT
