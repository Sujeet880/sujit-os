"use client";

import React, { useState } from "react";
import { 
  Workflow, Users, FileText, Calendar, CreditCard, CheckSquare, 
  TrendingUp, Bell, Activity, Settings, Database, Eye, ShieldAlert,
  Search, Plus, Sparkles, Filter, Check, AlertCircle, BarChart3, 
  Map, LayoutGrid, CheckCircle2, RefreshCw, Milestone, Layers,
  ChevronRight, ArrowRight, Code, MessageSquare, LineChart, FileCheck
} from "lucide-react";

import "./ca-diagrams.css";

// 1. Unified Operating System Diagram (Phase 2, Image 03)
export function UnifiedOperatingSystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const traditionalTools = [
    { name: "Spreadsheet", style: { top: "20px", left: "20px" } },
    { name: "WhatsApp", style: { top: "120px", left: "10px" } },
    { name: "Email", style: { top: "70px", left: "150px" } },
    { name: "Accounting Software", style: { top: "160px", left: "160px" } },
    { name: "Calendar", style: { top: "240px", left: "30px" } },
    { name: "Drive", style: { top: "300px", left: "150px" } },
    { name: "Task Tool", style: { top: "370px", left: "20px" } },
    { name: "Payment Portal", style: { top: "420px", left: "150px" } },
  ];

  const unifiedFlow = [
    { name: "Client Workspace", desc: "Single CRM record" },
    { name: "Documents", desc: "Auto-collected files" },
    { name: "Tasks", desc: "Assigned workflows" },
    { name: "Compliance", desc: "Deadlines calculated" },
    { name: "Payments", desc: "Integrated invoices" },
    { name: "Reports", desc: "Real-time health check" },
    { name: "Communication", desc: "Context-linked history" },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Transformation Analysis</div>
      <div className="ca-diagram-title">Unified Operating System Model</div>
      
      <div className="ca-grid-2col" style={{ position: "relative", minHeight: "480px" }}>
        
        {/* Left Side: Traditional Fragmented Operations */}
        <div style={{ borderRight: "1px dashed #e7e7e1", paddingRight: "16px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#70706a" }}>Traditional Fragmented Operations</span>
            <span className="ca-diagram-badge" style={{ backgroundColor: "#FEE2E2", color: "#EF4444", border: "1px solid #FCA5A5" }}>Fragmented</span>
          </div>

          <div style={{ position: "relative", height: "400px", width: "100%" }}>
            {/* Messy connector lines */}
            <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
              <path d="M 80 40 L 120 90 M 120 90 L 220 180 M 220 180 L 100 140 M 100 140 L 80 260 M 80 260 L 220 320 M 220 320 L 80 390 M 80 390 L 220 440 M 220 180 L 220 320 M 220 320 L 80 40 M 80 140 L 220 440" 
                    fill="none" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>

            {traditionalTools.map((t, idx) => (
              <div 
                key={idx} 
                className="ca-diagram-card ca-interactive-hover"
                style={{ 
                  position: "absolute", 
                  width: "140px", 
                  padding: "8px 12px", 
                  borderRadius: "8px", 
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#ef4444",
                  border: "1px solid #fca5a5",
                  backgroundColor: "#FFF5F5",
                  ...t.style 
                }}
              >
                {t.name}
              </div>
            ))}
          </div>
        </div>

        {/* Center: Transformation arrow indicator overlay for large screen */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          backgroundColor: "#F97316",
          color: "#ffffff",
          padding: "8px 16px",
          borderRadius: "50px",
          fontWeight: "700",
          fontSize: "0.75rem",
          boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span>TRANSFORM</span>
          <ArrowRight size={14} />
        </div>

        {/* Right Side: Connected Ecosystem */}
        <div style={{ paddingLeft: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1c1c1a" }}>Unified CA Operating System</span>
            <span className="ca-diagram-badge">Unified</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative" }}>
            {unifiedFlow.map((step, idx) => (
              <div 
                key={idx}
                className={`ca-diagram-card ca-diagram-card--orange-accent ca-interactive-hover`}
                style={{
                  padding: "10px 16px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderColor: hoveredNode === step.name ? "#F97316" : "#e7e7e1",
                  transform: hoveredNode === step.name ? "translateX(4px)" : "none",
                  backgroundColor: hoveredNode === step.name ? "#FFF7ED" : "#ffffff",
                }}
                onMouseEnter={() => setHoveredNode(step.name)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#1c1c1a" }}>{step.name}</div>
                  <div style={{ fontSize: "0.6875rem", color: "#70706a" }}>{step.desc}</div>
                </div>
                <div style={{ color: "#F97316", fontWeight: "bold", fontSize: "0.75rem" }}>0{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="ca-diagram-caption">
        A connected operational model reduces friction while improving visibility across every business function.
      </div>
    </div>
  );
}

// 2. Scalability Framework (Phase 2, Image 04)
export function ScalabilityFramework() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const layers = [
    { level: 5, title: "Scalable Firm Operations", desc: "Consistent operations at 10x volume", color: "#FFF7ED", border: "#F97316", text: "#EA580C" },
    { level: 4, title: "Cross-team Collaboration", desc: "Centralized workspaces & permission mapping", color: "#ffffff", border: "#e7e7e1", text: "#1c1c1a" },
    { level: 3, title: "Workflow Automation", desc: "Auto triggers for document requests & tasks", color: "#ffffff", border: "#e7e7e1", text: "#1c1c1a" },
    { level: 2, title: "Centralized Information", desc: "Client database as single source of truth", color: "#ffffff", border: "#e7e7e1", text: "#1c1c1a" },
    { level: 1, title: "Standardized Processes", desc: "Reusable templates for tax, audit & accounting", color: "#ffffff", border: "#e7e7e1", text: "#1c1c1a" },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Operations Framework</div>
      <div className="ca-diagram-title">System Scalability Pyramid</div>

      <div className="ca-grid-2col" style={{ minHeight: "400px" }}>
        
        {/* Left Side: Pyramid Layers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
          {layers.map((layer) => {
            const isHovered = hoveredLayer === layer.level;
            return (
              <div
                key={layer.level}
                className="ca-diagram-card ca-interactive-hover"
                style={{
                  border: `1.5px solid ${isHovered || layer.level === 5 ? layer.border : "#e7e7e1"}`,
                  backgroundColor: isHovered ? "#FFF7ED" : layer.color,
                  padding: "14px 18px",
                  marginLeft: `${(5 - layer.level) * 20}px`, // creates the pyramid indentation
                  transition: "all 200ms ease",
                }}
                onMouseEnter={() => setHoveredLayer(layer.level)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: "700", color: layer.text }}>{layer.title}</div>
                  <span style={{ fontSize: "0.6875rem", color: "#a1a19a", fontWeight: "bold" }}>L{layer.level}</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#70706a", marginTop: "2px" }}>{layer.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Growth Indicators */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
          <div className="ca-diagram-card ca-diagram-card--orange-accent">
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#ea580c" }}>Growth Indicators</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", fontSize: "0.8125rem", fontWeight: "600", color: "#3c3c37" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Users size={14} style={{ color: "#ea580c" }} />
                <span>More Clients</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckSquare size={14} style={{ color: "#ea580c" }} />
                <span>More Tasks</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FileText size={14} style={{ color: "#ea580c" }} />
                <span>More Documents</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Users size={14} style={{ color: "#ea580c" }} />
                <span>More Team Members</span>
              </div>
              <div style={{ borderTop: "1px dashed #e7e7e1", marginBlock: "6px", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px", color: "#F97316", fontWeight: "700" }}>
                <Sparkles size={14} />
                <span>Same Operational Control</span>
              </div>
            </div>
          </div>

          <div style={{ padding: "16px", background: "#ffffff", border: "1px solid #ea580c", borderRadius: "12px", fontStyle: "italic", fontSize: "0.8125rem", color: "#3c3c37", position: "relative" }}>
            <span style={{ position: "absolute", top: "-10px", left: "16px", backgroundColor: "#F97316", color: "#ffffff", fontSize: "0.6rem", fontWeight: "800", padding: "2px 6px", borderRadius: "4px", textTransform: "uppercase" }}>Strategy Quote</span>
            &ldquo;Growth should increase business value, not operational complexity.&rdquo;
          </div>
        </div>

      </div>
      <div className="ca-diagram-caption">
        Framework displaying operational layer scaling capability. Standardized procedures form the foundation.
      </div>
    </div>
  );
}

// 3. Product Information Architecture Diagram (Phase 3, Image 01)
export function ProductInformationArchitecture() {
  const [activeTab, setActiveTab] = useState<string>("clients");

  const modules = [
    { id: "clients", name: "Client Management", desc: "Unified workspace profile for firm relationships" },
    { id: "tasks", name: "Task Management", desc: "Visual tracking board and assignments" },
    { id: "compliance", name: "Compliance Engine", desc: "GST, TDS, and corporate filing automation" },
  ];

  const iaTree: Record<string, string[]> = {
    clients: [
      "Client Database",
      "Client Workspace (Company Details, Contacts)",
      "Engagement Log (Historical records)",
      "Linked Folder (Document Vault)",
      "Invoices & Payments (Retainers)",
      "Compliance Timeline Setup"
    ],
    tasks: [
      "Kanban Task Board",
      "Assignee workload mapper",
      "Priority chips & status alerts",
      "Deadlines calendar integration",
      "Dependency mappings"
    ],
    compliance: [
      "Regulatory Filing Timelines",
      "GST Return Portal Integration",
      "Income Tax returns",
      "ROC filings database",
      "TDS mapping tracker",
      "Government notices scanner"
    ]
  };

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">System Map</div>
      <div className="ca-diagram-title">Product Information Architecture</div>

      <div className="ca-grid-2col" style={{ minHeight: "380px" }}>
        
        {/* Left Side Navigation List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "#a1a19a" }}>Select Module Node</span>
          {modules.map((m) => {
            const isActive = activeTab === m.id;
            return (
              <div
                key={m.id}
                className={`ca-diagram-card ca-interactive-hover`}
                style={{
                  border: isActive ? "1.5px solid #F97316" : "1.5px solid #e7e7e1",
                  backgroundColor: isActive ? "#FFF7ED" : "#ffffff",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab(m.id)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "0.875rem", color: isActive ? "#ea580c" : "#1c1c1a" }}>
                  {m.id === "clients" && <Users size={16} />}
                  {m.id === "tasks" && <CheckSquare size={16} />}
                  {m.id === "compliance" && <Calendar size={16} />}
                  <span>{m.name}</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#70706a", marginTop: "4px" }}>{m.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Tree expansion list */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "16px", borderLeft: "1px dashed #e7e7e1" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "#a1a19a", marginBottom: "12px" }}>IA Child Nodes & Hierarchy</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {iaTree[activeTab].map((item, idx) => (
              <div 
                key={idx}
                className="ca-diagram-card"
                style={{ 
                  padding: "10px 14px", 
                  fontSize: "0.8125rem", 
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderColor: "#e7e7e1"
                }}
              >
                <ChevronRight size={14} style={{ color: "#F97316" }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="ca-diagram-caption">
        Click modules on the left to expand their child nodes and information flow structure.
      </div>
    </div>
  );
}

// 4. Product Navigation Framework (Phase 3, Image 02)
export function ProductNavigationFramework() {
  const [activeMenu, setActiveMenu] = useState<string>("clients");

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Workspace Architecture</div>
      <div className="ca-diagram-title">System Navigation Canvas</div>

      <div style={{ height: "420px" }}>
        <div className="ca-app-mockup">
          
          {/* Mock Topbar */}
          <div className="ca-app-header">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F97316" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#1c1c1a" }}>CA OS</span>
              <span className="ca-diagram-badge" style={{ fontSize: "0.6rem", padding: "1px 6px" }}>Workspace: Alpha</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f1f1ee", padding: "4px 8px", borderRadius: "6px", width: "200px" }}>
              <Search size={10} style={{ color: "#a1a19a" }} />
              <span style={{ fontSize: "0.65rem", color: "#a1a19a" }}>Search (⌘K)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Bell size={14} style={{ color: "#70706a" }} />
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#e7e7e1" }} />
            </div>
          </div>

          <div className="ca-app-body">
            {/* Mock Sidebar */}
            <div className="ca-app-sidebar">
              {[
                { id: "dashboard", label: "Dashboard", icon: <LayoutGrid size={12} /> },
                { id: "clients", label: "Clients", icon: <Users size={12} /> },
                { id: "tasks", label: "Tasks", icon: <CheckSquare size={12} /> },
                { id: "documents", label: "Documents", icon: <FileText size={12} /> },
                { id: "compliance", label: "Compliance", icon: <Calendar size={12} /> },
                { id: "settings", label: "Settings", icon: <Settings size={12} /> },
              ].map((item) => (
                <div 
                  key={item.id}
                  className={`ca-app-sidebar-item ${activeMenu === item.id ? "ca-app-sidebar-item--active" : ""}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Mock Content area */}
            <div className="ca-app-content">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: "700", color: "#1c1c1a", textTransform: "capitalize" }}>{activeMenu} Workspace</span>
                <span className="ca-diagram-badge" style={{ fontSize: "0.65rem" }}>Content Frame</span>
              </div>
              <div style={{ border: "1.5px dashed #ea580c", borderRadius: "8px", flex: 1, padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fafaf9" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: "700", color: "#ea580c", display: "block" }}>Dynamic Viewport</span>
                  <span style={{ fontSize: "0.7rem", color: "#70706a", marginTop: "4px", display: "block" }}>Displays active context for {activeMenu}</span>
                </div>
              </div>
            </div>

            {/* Mock Right panel */}
            <div className="ca-app-right-panel">
              <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#70706a", textTransform: "uppercase" }}>Sidebar Panel</span>
              <div className="ca-diagram-card" style={{ padding: "8px 10px", fontSize: "0.65rem", borderColor: "#f1f1ee" }}>
                <div style={{ fontWeight: "700", color: "#1c1c1a" }}>Upcoming Deadlines</div>
                <div style={{ color: "#ea580c", marginTop: "2px" }}>GST Return • Acme Corp</div>
              </div>
              <div className="ca-diagram-card" style={{ padding: "8px 10px", fontSize: "0.65rem", borderColor: "#f1f1ee" }}>
                <div style={{ fontWeight: "700", color: "#1c1c1a" }}>Recent activity</div>
                <div style={{ color: "#70706a", marginTop: "2px" }}>John Doe updated audit docs</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="ca-diagram-caption" style={{ marginTop: "16px" }}>
        Navigation Principles: Minimal clicks • Predictable navigation • Scalable hierarchy • Persistent context.
      </div>
    </div>
  );
}

// 5. Cross-Module User Flow Diagram (Phase 3, Image 03)
export function CrossModuleUserFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { label: "Lead Created", lane: "Operations", desc: "Enquiry converted in CRM" },
    { label: "Client Onboarding", lane: "Operations", desc: "Contract signed, profile created" },
    { label: "Document Collection", lane: "Communication", desc: "Auto request sent to portal" },
    { label: "Task Assignment", lane: "Operations", desc: "Filing ticket created for accountant" },
    { label: "Compliance Setup", lane: "Compliance", desc: "Filing deadlines calculated" },
    { label: "Invoice Generated", lane: "Finance", desc: "Retainer billed via Stripe" },
    { label: "Payment Received", lane: "Finance", desc: "Status synced automatically" },
    { label: "Recurring Services", lane: "Automation", desc: "Next monthly run scheduled" },
    { label: "Monthly Reporting", lane: "Automation", desc: "Health check summary generated" },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">User Flow Mapping</div>
      <div className="ca-diagram-title">Cross-Module User Journey</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", minHeight: "360px", justifyContent: "center" }}>
        
        {/* Steps Horizontal Row */}
        <div style={{ display: "flex", overflowX: "auto", paddingBottom: "16px", gap: "12px" }}>
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                className="ca-diagram-card ca-interactive-hover"
                style={{
                  minWidth: "160px",
                  flex: "0 0 auto",
                  border: isSelected ? "2px solid #F97316" : "1.5px solid #e7e7e1",
                  backgroundColor: isSelected ? "#FFF7ED" : "#ffffff",
                  cursor: "pointer",
                }}
                onClick={() => setActiveStep(idx)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>{step.lane}</span>
                  <span style={{ fontSize: "0.65rem", fontWeight: "bold", color: "#a1a19a" }}>0{idx + 1}</span>
                </div>
                <div style={{ fontSize: "0.8125rem", fontWeight: "700", color: isSelected ? "#ea580c" : "#1c1c1a" }}>{step.label}</div>
                <div style={{ fontSize: "0.7rem", color: "#70706a", marginTop: "4px", whiteSpace: "normal" }}>{step.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="ca-diagram-card ca-diagram-card--orange-accent" style={{ background: "#ffffff", padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", color: "#ea580c" }}>Step Detail: 0{activeStep + 1} of {steps.length}</span>
            <span className="ca-diagram-badge" style={{ marginLeft: "auto" }}>{steps[activeStep].lane} Layer</span>
          </div>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "800", margin: "6px 0", color: "#1c1c1a" }}>{steps[activeStep].label}</h3>
          <p style={{ fontSize: "0.8125rem", color: "#70706a", margin: 0 }}>
            {steps[activeStep].desc}. In a traditional firm, this handoff involves manual data copying across disconnected systems. Here, the system triggers the transaction automatically under one shared database context.
          </p>
        </div>

      </div>

      <div className="ca-diagram-caption">
        Every workflow connects naturally without forcing users to switch platforms. Click steps to view details.
      </div>
    </div>
  );
}

// 6. Single Source of Truth Diagram (Phase 3, Image 04)
export function SingleSourceOfTruth() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const surroundingNodes = [
    { name: "Documents", angle: 0 },
    { name: "Payments", angle: 30 },
    { name: "Compliance", angle: 60 },
    { name: "Tasks", angle: 90 },
    { name: "Notes", angle: 120 },
    { name: "Meetings", angle: 150 },
    { name: "Invoices", angle: 180 },
    { name: "Reports", angle: 210 },
    { name: "Emails", angle: 240 },
    { name: "Team Activity", angle: 270 },
    { name: "Calendar", angle: 300 },
    { name: "Audit History", angle: 330 },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Database Architecture</div>
      <div className="ca-diagram-title">Unified Client Record (Single Source of Truth)</div>

      <div style={{ position: "relative", height: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        
        {/* Radiating SVG Lines */}
        <svg className="ca-svg-connectors">
          {surroundingNodes.map((node, idx) => {
            const rad = (node.angle * Math.PI) / 180;
            const x1 = 50 + 35 * Math.cos(rad);
            const y1 = 50 + 35 * Math.sin(rad);
            const isHovered = hoveredNode === node.name;
            return (
              <line
                key={idx}
                x1="50%"
                y1="50%"
                x2={`${x1}%`}
                y2={`${y1}%`}
                className={isHovered ? "ca-connector-line--active" : "ca-connector-line"}
              />
            );
          })}
        </svg>

        {/* Central Source Card */}
        <div 
          className="ca-diagram-card ca-diagram-card--orange-border"
          style={{ 
            width: "200px", 
            padding: "20px", 
            zIndex: 10, 
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(249, 115, 22, 0.15)",
            background: "#ffffff"
          }}
        >
          <Database size={24} style={{ color: "#F97316", margin: "0 auto 8px auto" }} />
          <div style={{ fontSize: "0.875rem", fontWeight: "800", color: "#1c1c1a" }}>Unified Client Record</div>
          <span style={{ fontSize: "0.65rem", color: "#70706a", marginTop: "4px", display: "block" }}>Single Source Database</span>
        </div>

        {/* Surrounding Nodes positioned radially */}
        {surroundingNodes.map((node, idx) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 35 * Math.cos(rad);
          const y = 50 + 35 * Math.sin(rad);
          const isHovered = hoveredNode === node.name;
          
          return (
            <div
              key={idx}
              className="ca-diagram-card ca-interactive-hover"
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                padding: "6px 12px",
                fontSize: "0.7rem",
                fontWeight: "600",
                borderColor: isHovered ? "#F97316" : "#e7e7e1",
                backgroundColor: isHovered ? "#FFF7ED" : "#ffffff",
                color: isHovered ? "#ea580c" : "#70706a",
                zIndex: 5,
              }}
              onMouseEnter={() => setHoveredNode(node.name)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {node.name}
            </div>
          );
        })}

      </div>

      <div className="ca-diagram-caption" style={{ marginTop: "12px" }}>
        Every interaction strengthens one shared source of truth rather than creating isolated copies.
      </div>
    </div>
  );
}

// 7. Executive Dashboard Interface (Phase 4, Image 01)
export function ExecutiveDashboard() {
  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Interface Concept 01</div>
      <div className="ca-diagram-title">Executive Operations Dashboard</div>

      <div style={{ height: "460px" }}>
        <div className="ca-app-mockup">
          <div className="ca-app-header">
            <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Dashboard Overview</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <span className="ca-diagram-badge">Role: Partner</span>
              <span className="ca-diagram-badge" style={{ backgroundColor: "#F1F1EE", border: "1px solid #E7E7E1", color: "#1C1C1A" }}>July 2026</span>
            </div>
          </div>

          <div className="ca-app-body" style={{ background: "#FAFAF9", padding: "16px", overflowY: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              
              {/* KPI Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                {[
                  { label: "Active Clients", value: "142", change: "+12% MoM", icon: <Users size={14} /> },
                  { label: "Pending Compliance", value: "24", change: "6 due in 3 days", icon: <Calendar size={14} /> },
                  { label: "Open Tasks", value: "84", change: "12 in Review", icon: <CheckSquare size={14} /> },
                  { label: "Revenue MTD", value: "$12,450", change: "+8.4% target", icon: <CreditCard size={14} /> },
                ].map((kpi, idx) => (
                  <div key={idx} className="ca-diagram-card" style={{ padding: "12px", borderLeft: "3px solid #F97316" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#70706a", fontSize: "0.65rem", fontWeight: "700" }}>
                      <span>{kpi.label}</span>
                      {kpi.icon}
                    </div>
                    <div style={{ fontSize: "1.125rem", fontWeight: "800", color: "#1c1c1a", marginTop: "4px" }}>{kpi.value}</div>
                    <div style={{ fontSize: "0.6rem", color: "#F97316", marginTop: "2px", fontWeight: "600" }}>{kpi.change}</div>
                  </div>
                ))}
              </div>

              {/* Graphic Charts Frame */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
                
                {/* SVG Revenue Line Graph */}
                <div className="ca-diagram-card" style={{ height: "200px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>MTD Operations Velocity</span>
                    <span style={{ fontSize: "0.6rem", color: "#70706a" }}>Tasks Completed per day</span>
                  </div>
                  <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "flex-end" }}>
                    <svg viewBox="0 0 400 120" style={{ width: "100%", height: "100%" }}>
                      <path d="M 0 100 Q 80 80 120 40 T 240 80 T 360 20 T 400 30" fill="none" stroke="#F97316" strokeWidth="2.5" />
                      <line x1="0" y1="110" x2="400" y2="110" stroke="#E7E7E1" strokeWidth="1" />
                    </svg>
                  </div>
                </div>

                {/* Donut Compliance Score */}
                <div className="ca-diagram-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", marginBottom: "8px", alignSelf: "flex-start" }}>Filing Health</span>
                  <div style={{ position: "relative", width: "90px", height: "90px" }}>
                    <svg viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)", width: "100%", height: "100%" }}>
                      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f1f1ee" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F97316" strokeWidth="3" strokeDasharray="96 4" />
                    </svg>
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "0.875rem", fontWeight: "800", color: "#1c1c1a" }}>96%</div>
                  </div>
                  <span style={{ fontSize: "0.6rem", color: "#70706a", marginTop: "8px" }}>Compliance Filing Accuracy</span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="ca-diagram-caption">
        Premium information-dense executive overview tailored for decision makers.
      </div>
    </div>
  );
}

// 8. Client Workspace Interface (Phase 4, Image 02)
export function ClientWorkspace() {
  const [activeSubTab, setActiveSubTab] = useState<string>("docs");

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Interface Concept 02</div>
      <div className="ca-diagram-title">Unified Client Workspace</div>

      <div style={{ height: "460px" }}>
        <div className="ca-app-mockup">
          
          {/* Mock Client Header */}
          <div style={{ borderBottom: "1px solid #f1f1ee", padding: "16px", background: "#fafaf9" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <h2 style={{ fontSize: "1.125rem", fontWeight: "800", color: "#1c1c1a", margin: 0 }}>Acme Corporation</h2>
                  <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>Active Client</span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "#70706a", marginTop: "2px" }}>Industry: Technology SaaS • Partner: John Doe</div>
              </div>
              <button style={{ backgroundColor: "#F97316", color: "#ffffff", border: "none", borderRadius: "6px", fontSize: "0.7rem", padding: "6px 12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                <Plus size={12} />
                <span>Request Documents</span>
              </button>
            </div>

            {/* Sub navigation tabs */}
            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              {[
                { id: "overview", label: "Overview" },
                { id: "docs", label: "Documents Vault" },
                { id: "tasks", label: "Task List" },
                { id: "compliance", label: "Filing Status" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  style={{
                    background: "none",
                    border: "none",
                    paddingBottom: "4px",
                    fontSize: "0.75rem",
                    fontWeight: activeSubTab === tab.id ? "700" : "500",
                    color: activeSubTab === tab.id ? "#F97316" : "#70706a",
                    borderBottom: activeSubTab === tab.id ? "2px solid #F97316" : "none",
                    cursor: "pointer"
                  }}
                  onClick={() => setActiveSubTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Client Body content */}
          <div className="ca-app-body">
            <div className="ca-app-content">
              {activeSubTab === "docs" && (
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#a1a19a" }}>Secure Document Folders</span>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "8px" }}>
                    {[
                      { name: "FY 2025-26 Bank Statements", size: "3 files", date: "Uploaded 2h ago" },
                      { name: "GST Returns & Invoices", size: "12 files", date: "Uploaded 1d ago" },
                      { name: "Audited Ledger Spreadsheet", size: "1 file", date: "Updated 3d ago" },
                      { name: "ROC Annual Returns Proof", size: "2 files", date: "Uploaded 1w ago" },
                    ].map((folder, idx) => (
                      <div key={idx} className="ca-diagram-card ca-interactive-hover" style={{ padding: "10px", display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                        <FileText size={20} style={{ color: "#F97316" }} />
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: "700" }}>{folder.name}</div>
                          <div style={{ fontSize: "0.625rem", color: "#a1a19a" }}>{folder.size} • {folder.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSubTab !== "docs" && (
                <div style={{ border: "1px dashed #e7e7e1", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: "600", color: "#70706a" }}>Displaying {activeSubTab} details for Acme Corp</span>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="ca-app-right-panel" style={{ width: "200px" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: "700", color: "#a1a19a" }}>Upcoming Filings</span>
              <div className="ca-diagram-card" style={{ borderColor: "#FCA5A5", background: "#FFF5F5" }}>
                <span className="ca-diagram-badge" style={{ backgroundColor: "#FCA5A5", color: "#EF4444" }}>Overdue</span>
                <div style={{ fontSize: "0.75rem", fontWeight: "700", marginTop: "4px" }}>GST-3B Return</div>
                <div style={{ fontSize: "0.625rem", color: "#70706a", marginTop: "2px" }}>Due date: July 20, 2026</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="ca-diagram-caption">
        Client workspace compiling billing, tasks, communications and documents vault under one screen.
      </div>
    </div>
  );
}

// 9. Compliance Workspace Interface (Phase 4, Image 03)
export function ComplianceWorkspace() {
  const [filter, setFilter] = useState<string>("all");

  const complianceItems = [
    { type: "GST GSTR-1", client: "Acme Corp", period: "June 2026", date: "Aug 11, 2026", status: "Pending", color: "#F59E0B" },
    { type: "TDS Filing", client: "Beta Labs", period: "Q1 FY26", date: "July 31, 2026", status: "In Progress", color: "#3B82F6" },
    { type: "ROC Form 11", client: "Delta Tech", period: "FY 2025", date: "Oct 30, 2026", status: "Filed", color: "#10B981" },
    { type: "GST GSTR-3B", client: "Omega Corp", period: "June 2026", date: "July 20, 2026", status: "Overdue", color: "#EF4444" },
    { type: "Income Tax return", client: "Zenith Inc", period: "AY 2026-27", date: "July 31, 2026", status: "In Progress", color: "#3B82F6" },
  ];

  const filteredItems = complianceItems.filter(item => {
    if (filter === "all") return true;
    return item.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Interface Concept 03</div>
      <div className="ca-diagram-title">Compliance Management Engine</div>

      <div style={{ height: "460px" }}>
        <div className="ca-app-mockup">
          <div className="ca-app-header">
            <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Statutory Compliance Checklist</span>
            
            {/* Filters */}
            <div style={{ display: "flex", gap: "6px" }}>
              {["all", "filed", "pending", "overdue"].map((status) => (
                <button
                  key={status}
                  style={{
                    backgroundColor: filter === status ? "#FFF7ED" : "transparent",
                    color: filter === status ? "#ea580c" : "#70706a",
                    border: filter === status ? "1.5px solid #ffedd5" : "1px solid #e7e7e1",
                    borderRadius: "4px",
                    fontSize: "0.65rem",
                    padding: "3px 8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textTransform: "capitalize"
                  }}
                  onClick={() => setFilter(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="ca-app-content" style={{ background: "#ffffff", padding: "16px" }}>
            
            {/* Compliance Health Score Header Banner */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FAFAF9", border: "1px solid #E7E7E1", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Milestone size={18} style={{ color: "#F97316" }} />
                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: "700" }}>Compliance Health Score</div>
                  <div style={{ fontSize: "0.65rem", color: "#70706a" }}>Auto-synced regulatory updates with government portals</div>
                </div>
              </div>
              <span style={{ fontSize: "1.125rem", fontWeight: "800", color: "#F97316" }}>96%</span>
            </div>

            {/* Data Table */}
            <div style={{ border: "1px solid #e7e7e1", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", padding: "8px 12px", background: "#fafaf9", borderBottom: "1px solid #e7e7e1", fontSize: "0.65rem", fontWeight: "700", color: "#70706a" }}>
                <span>Compliance Form</span>
                <span>Client Name</span>
                <span>Filing Period</span>
                <span>Due Date</span>
                <span>Status</span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", overflowY: "auto", maxHeight: "200px" }}>
                {filteredItems.map((item, idx) => (
                  <div key={idx} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", padding: "10px 12px", borderBottom: "1px solid #f1f1ee", fontSize: "0.75rem", alignItems: "center", color: "#1c1c1a" }}>
                    <span style={{ fontWeight: "700" }}>{item.type}</span>
                    <span>{item.client}</span>
                    <span>{item.period}</span>
                    <span>{item.date}</span>
                    <span style={{
                      color: item.color,
                      fontWeight: "700",
                      fontSize: "0.65rem"
                    }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="ca-diagram-caption">
        Interactive checklist database mapping GST, Income Tax, ROC and TDS return status.
      </div>
    </div>
  );
}

// 10. Task & Workflow Management Interface (Phase 4, Image 04)
export function TaskWorkflowManagement() {
  const [selectedTask, setSelectedTask] = useState<number>(0);

  const tasks = [
    { title: "Review GST receipts", client: "Acme Corp", due: "July 24", priority: "High", color: "#EF4444", status: "Review" },
    { title: "Draft ROC resolution", client: "Beta Labs", due: "July 31", priority: "Medium", color: "#F59E0B", status: "In Progress" },
    { title: "Quarterly TDS audit", client: "Gamma Co", due: "Aug 15", priority: "Low", color: "#3B82F6", status: "To Do" },
    { title: "File income tax returns", client: "Zenith Inc", due: "July 20", priority: "High", color: "#EF4444", status: "To Do" },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Interface Concept 04</div>
      <div className="ca-diagram-title">Workflow & Kanban Management</div>

      <div style={{ height: "460px" }}>
        <div className="ca-app-mockup">
          <div className="ca-app-header">
            <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Filing Task Workflows</span>
            <span className="ca-diagram-badge">Kanban View</span>
          </div>

          <div className="ca-app-body">
            
            {/* Kanban Columns */}
            <div style={{ flex: 1, padding: "12px", background: "#FAFAF9", overflowX: "auto" }}>
              <div className="ca-kanban-board">
                
                {/* Column: To Do */}
                <div className="ca-kanban-column">
                  <div className="ca-kanban-column-header">
                    <span>To Do</span>
                    <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>2</span>
                  </div>
                  {tasks.filter(t => t.status === "To Do").map((task, idx) => (
                    <div key={idx} className="ca-kanban-card ca-interactive-hover" onClick={() => setSelectedTask(tasks.indexOf(task))}>
                      <span style={{ fontSize: "0.6rem", color: "#70706a" }}>{task.client}</span>
                      <div style={{ fontWeight: "700" }}>{task.title}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                        <span style={{ color: task.color, fontWeight: "600", fontSize: "0.6rem" }}>{task.priority}</span>
                        <span style={{ fontSize: "0.6rem", color: "#a1a19a" }}>{task.due}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column: In Progress */}
                <div className="ca-kanban-column">
                  <div className="ca-kanban-column-header">
                    <span>In Progress</span>
                    <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>1</span>
                  </div>
                  {tasks.filter(t => t.status === "In Progress").map((task, idx) => (
                    <div key={idx} className="ca-kanban-card ca-interactive-hover" onClick={() => setSelectedTask(tasks.indexOf(task))}>
                      <span style={{ fontSize: "0.6rem", color: "#70706a" }}>{task.client}</span>
                      <div style={{ fontWeight: "700" }}>{task.title}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                        <span style={{ color: task.color, fontWeight: "600", fontSize: "0.6rem" }}>{task.priority}</span>
                        <span style={{ fontSize: "0.6rem", color: "#a1a19a" }}>{task.due}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column: Review */}
                <div className="ca-kanban-column">
                  <div className="ca-kanban-column-header">
                    <span>In Review</span>
                    <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>1</span>
                  </div>
                  {tasks.filter(t => t.status === "Review").map((task, idx) => (
                    <div key={idx} className="ca-kanban-card ca-interactive-hover" onClick={() => setSelectedTask(tasks.indexOf(task))} style={{ borderLeft: "3px solid #F97316" }}>
                      <span style={{ fontSize: "0.6rem", color: "#70706a" }}>{task.client}</span>
                      <div style={{ fontWeight: "700" }}>{task.title}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                        <span style={{ color: task.color, fontWeight: "600", fontSize: "0.6rem" }}>{task.priority}</span>
                        <span style={{ fontSize: "0.6rem", color: "#a1a19a" }}>{task.due}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column: Done */}
                <div className="ca-kanban-column">
                  <div className="ca-kanban-column-header">
                    <span>Completed</span>
                    <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>0</span>
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#a1a19a", fontStyle: "italic" }}>
                    No completed tasks
                  </div>
                </div>

              </div>
            </div>

            {/* Mock Task Details Panel */}
            <div className="ca-app-right-panel" style={{ width: "200px" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: "700", color: "#a1a19a" }}>Task Detail</span>
              <div style={{ fontSize: "0.75rem", color: "#1c1c1a", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontWeight: "700" }}>{tasks[selectedTask].title}</div>
                <div style={{ fontSize: "0.65rem", color: "#70706a" }}>Client: {tasks[selectedTask].client}</div>
                <div style={{ fontSize: "0.65rem", color: "#70706a" }}>Due: {tasks[selectedTask].due}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.65rem" }}>
                  <span>Priority:</span>
                  <span style={{ color: tasks[selectedTask].color, fontWeight: "700" }}>{tasks[selectedTask].priority}</span>
                </div>
                <div style={{ borderTop: "1px dashed #e7e7e1", marginTop: "8px", paddingTop: "8px", fontSize: "0.65rem" }}>
                  <div style={{ fontWeight: "700", marginBottom: "4px" }}>Assignee comments:</div>
                  <span style={{ color: "#70706a", fontStyle: "italic" }}>&ldquo;Waiting on client bank receipt confirmation.&rdquo;</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="ca-diagram-caption">
        Enterprise Kanban and project tracking layout modeled after high-volume SaaS workflows. Click cards to view details.
      </div>
    </div>
  );
}

// 11. Reports & Analytics Interface (Phase 4, Image 05)
export function ReportsAnalytics() {
  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Interface Concept 05</div>
      <div className="ca-diagram-title">Operational Reports & Analytics</div>

      <div style={{ height: "460px" }}>
        <div className="ca-app-mockup">
          <div className="ca-app-header">
            <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Firm Operations Velocity</span>
            <span className="ca-diagram-badge">Analytics Center</span>
          </div>

          <div className="ca-app-body" style={{ background: "#FAFAF9", padding: "16px", overflowY: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              
              {/* Top stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {[
                  { label: "Revenue Trend", value: "+28% YoY" },
                  { label: "Filing Accuracy", value: "99.8%" },
                  { label: "Employee Utilization", value: "84%" }
                ].map((stat, idx) => (
                  <div key={idx} className="ca-diagram-card" style={{ padding: "10px" }}>
                    <span style={{ fontSize: "0.6rem", color: "#a1a19a" }}>{stat.label}</span>
                    <div style={{ fontSize: "1rem", fontWeight: "800", color: "#F97316" }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Chart frame */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                
                {/* SVG Bar Chart for outstanding payments */}
                <div className="ca-diagram-card" style={{ height: "180px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: "700", marginBottom: "8px" }}>Outstanding Payments Aging</span>
                  <div style={{ display: "flex", height: "100px", alignItems: "flex-end", gap: "16px", marginTop: "12px" }}>
                    {[
                      { days: "0-30d", height: 70 },
                      { days: "31-60d", height: 40 },
                      { days: "61-90d", height: 20 },
                      { days: "90d+", height: 10 }
                    ].map((bar, idx) => (
                      <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ background: "#F97316", width: "100%", height: `${bar.height}px`, borderRadius: "4px 4px 0 0" }} />
                        <span style={{ fontSize: "0.55rem", color: "#70706a", marginTop: "4px" }}>{bar.days}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SVG Line Graph client growth */}
                <div className="ca-diagram-card" style={{ height: "180px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: "700", marginBottom: "8px" }}>Client Database Growth</span>
                  <div style={{ display: "flex", height: "100px", alignItems: "flex-end", marginTop: "12px" }}>
                    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
                      <path d="M 0 70 Q 50 60 100 40 T 200 10" fill="none" stroke="#F97316" strokeWidth="2.5" />
                      <line x1="0" y1="75" x2="200" y2="75" stroke="#E7E7E1" strokeWidth="1" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Insights Card */}
              <div className="ca-diagram-card ca-diagram-card--orange-accent" style={{ padding: "12px", background: "#ffffff" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#ea580c" }}>AI Bottleneck Alert</span>
                <p style={{ fontSize: "0.75rem", color: "#70706a", margin: "4px 0 0 0" }}>
                  Average response times for client bank confirmation upload has slowed to 4.2 days. Reminders scheduled automatically.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="ca-diagram-caption">
        Executive reporting interface mapping task velocity, compliance trends, and billing analytics.
      </div>
    </div>
  );
}

// 12. Enterprise Design System (Phase 5, Image 01)
export function EnterpriseDesignSystem() {
  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Design System Specs</div>
      <div className="ca-diagram-title">CA OS Enterprise UI Component Spec Sheet</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Row 1: Colors & Typography */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          
          {/* Colors */}
          <div className="ca-diagram-card">
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#a1a19a", marginBottom: "8px" }}>Brand Colors</span>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { name: "Primary Orange", hex: "#F97316", bg: "#F97316", text: "#ffffff" },
                { name: "Off-White", hex: "#FAFAF8", bg: "#FAFAF8", text: "#1c1c1a" },
                { name: "Dark Neutral", hex: "#1C1C1A", bg: "#1C1C1A", text: "#ffffff" },
                { name: "Soft Gray", hex: "#E7E7E1", bg: "#E7E7E1", text: "#1c1c1a" },
              ].map((color, idx) => (
                <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ height: "40px", backgroundColor: color.bg, borderRadius: "6px", border: "1px solid #e7e7e1", display: "flex", alignItems: "center", justifyContent: "center", color: color.text, fontSize: "0.55rem", fontWeight: "bold" }}>
                    Aa
                  </div>
                  <span style={{ fontSize: "0.55rem", fontWeight: "700", color: "#1c1c1a" }}>{color.name}</span>
                  <span style={{ fontSize: "0.5rem", color: "#70706a" }}>{color.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Scale */}
          <div className="ca-diagram-card">
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#a1a19a", marginBottom: "8px" }}>Typography Hierarchy (Inter)</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ fontSize: "1.125rem", fontWeight: "800" }}>Bold Heading H1 - 18px</div>
              <div style={{ fontSize: "0.875rem", fontWeight: "700" }}>Module Subtitle H2 - 14px</div>
              <div style={{ fontSize: "0.75rem", color: "#1c1c1a" }}>Body Copy Text - 12px</div>
              <div style={{ fontSize: "0.625rem", color: "#70706a" }}>Micro caption and labels - 10px</div>
            </div>
          </div>

        </div>

        {/* Row 2: Components (Buttons & State Badges) */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
          
          {/* Component Buttons Showcase */}
          <div className="ca-diagram-card">
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#a1a19a", marginBottom: "12px" }}>Interactive Components</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <button style={{ backgroundColor: "#F97316", color: "#ffffff", border: "none", borderRadius: "6px", fontSize: "0.7rem", padding: "6px 12px", fontWeight: "600", cursor: "pointer" }}>
                Primary Button
              </button>
              <button style={{ backgroundColor: "#ffffff", color: "#ea580c", border: "1.5px solid #ffedd5", borderRadius: "6px", fontSize: "0.7rem", padding: "6px 12px", fontWeight: "600", cursor: "pointer" }}>
                Secondary Button
              </button>
              <button style={{ backgroundColor: "#fafaf9", color: "#a1a19a", border: "1px solid #e7e7e1", borderRadius: "6px", fontSize: "0.7rem", padding: "6px 12px", fontWeight: "600", cursor: "not-allowed" }} disabled>
                Disabled State
              </button>
              <button style={{ backgroundColor: "#ea580c", color: "#ffffff", border: "none", borderRadius: "6px", fontSize: "0.7rem", padding: "6px 12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                <RefreshCw size={10} className="ca-spin" />
                <span>Loading...</span>
              </button>
            </div>
          </div>

          {/* Status Badges */}
          <div className="ca-diagram-card">
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#a1a19a", marginBottom: "8px" }}>Status Chip Variants</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="ca-diagram-badge">Primary Status</span>
              <span className="ca-diagram-badge" style={{ backgroundColor: "#DCFCE7", color: "#16A34A", border: "1px solid #BBF7D0" }}>Success Badge</span>
              <span className="ca-diagram-badge" style={{ backgroundColor: "#FEF3C7", color: "#D97706", border: "1px solid #FDE68A" }}>Warning Alert</span>
              <span className="ca-diagram-badge" style={{ backgroundColor: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5" }}>Error alert</span>
            </div>
          </div>

        </div>

      </div>
      <div className="ca-diagram-caption">
        Figma Design tokens mapping corner radius, spacing rules, inputs, buttons, and state indicators.
      </div>
    </div>
  );
}

// 13. Engineering Collaboration (Phase 5, Image 02)
export function EngineeringCollaboration() {
  const steps = [
    { title: "Requirement", desc: "Business spec definition" },
    { title: "Research", desc: "Stakeholder workflow maps" },
    { title: "Wireframes", desc: "UX flow organization" },
    { title: "UI Design", desc: "Component application" },
    { title: "Review", desc: "Design validation board" },
    { title: "Handoff", desc: "Tokens & interaction spec" },
    { title: "Frontend", desc: "Tailwind React assembly" },
    { title: "Backend", desc: "DB record schema hook" },
    { title: "QA Testing", desc: "Edge case validation" },
    { title: "Release", desc: "Production deployment" },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Handoff Workflows</div>
      <div className="ca-diagram-title">Design-to-Engineering Integration Flow</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", minHeight: "360px", justifyContent: "center" }}>
        
        {/* Horizontal Timeline Row */}
        <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "12px" }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
              <div 
                className="ca-diagram-card" 
                style={{ 
                  width: "125px", 
                  padding: "10px", 
                  borderColor: idx === 5 ? "#F97316" : "#e7e7e1",
                  backgroundColor: idx === 5 ? "#FFF7ED" : "#ffffff",
                }}
              >
                <div style={{ fontSize: "0.6rem", color: "#a1a19a", fontWeight: "bold" }}>STEP 0{idx + 1}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: "700", color: idx === 5 ? "#ea580c" : "#1c1c1a", marginTop: "2px" }}>{step.title}</div>
                <div style={{ fontSize: "0.625rem", color: "#70706a", marginTop: "4px" }}>{step.desc}</div>
              </div>
              {idx < steps.length - 1 && (
                <ChevronRight size={14} style={{ color: idx === 4 ? "#F97316" : "#a1a19a" }} />
              )}
            </div>
          ))}
        </div>

        {/* Spec side notes card */}
        <div className="ca-diagram-card ca-diagram-card--orange-accent" style={{ background: "#ffffff", padding: "16px" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#ea580c" }}>Handoff Specification Package</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "8px", fontSize: "0.75rem", color: "#3c3c37" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Code size={12} style={{ color: "#F97316" }} />
              <span>Design Token Mapping</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Users size={12} style={{ color: "#F97316" }} />
              <span>Responsive Behavior specs</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Database size={12} style={{ color: "#F97316" }} />
              <span>API Request Considerations</span>
            </div>
          </div>
        </div>

      </div>
      <div className="ca-diagram-caption">
        Collaboration Principles: Design and Engineering evolve together. Handoff is a continuous integration, not a single drop.
      </div>
    </div>
  );
}

// 14. Product Impact & Outcomes Diagram (Phase 5, Image 03)
export function ProductImpactOutcomes() {
  const [metricTab, setMetricTab] = useState<number>(0);

  const stats = [
    { label: "Client Onboarding", before: "14 days", after: "2 days", change: "85% faster", desc: "Automated document request triggers and self-service portal upload remove manual emails." },
    { label: "Manual Data Entry", before: "100%", after: "0%", change: "Eliminated", desc: "Single source database database reads and writes globally, removing manual copying." },
    { label: "Compliance Deadlines", before: "Fragmented checklists", after: "99.8% filed on-time", change: "Full visibility", desc: "Auto-calculated calendar triggers visual cards and sends accountant reminders automatically." },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Outcomes Analysis</div>
      <div className="ca-diagram-title">Measured Product Design Impact</div>

      <div className="ca-grid-2col" style={{ minHeight: "360px" }}>
        
        {/* Left Side: Stats List Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
          {stats.map((stat, idx) => {
            const isSelected = metricTab === idx;
            return (
              <div
                key={idx}
                className="ca-diagram-card ca-interactive-hover"
                style={{
                  border: isSelected ? "1.5px solid #F97316" : "1.5px solid #e7e7e1",
                  backgroundColor: isSelected ? "#FFF7ED" : "#ffffff",
                  cursor: "pointer",
                }}
                onClick={() => setMetricTab(idx)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: "700", color: isSelected ? "#ea580c" : "#1c1c1a" }}>{stat.label}</span>
                  <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Before vs After breakdown */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px dashed #e7e7e1", paddingLeft: "24px" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "#a1a19a", marginBottom: "16px" }}>Detailed Outcome Comparison</span>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="ca-diagram-card" style={{ backgroundColor: "#fafaf9", borderColor: "#f1f1ee" }}>
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", color: "#70706a", fontWeight: "700" }}>Traditional (Before)</span>
              <div style={{ fontSize: "1.125rem", fontWeight: "800", color: "#ef4444", marginTop: "4px" }}>{stats[metricTab].before}</div>
            </div>
            <div className="ca-diagram-card" style={{ borderColor: "#FFF7ED", backgroundColor: "#FFF7ED" }}>
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", color: "#ea580c", fontWeight: "700" }}>CA Operating System (After)</span>
              <div style={{ fontSize: "1.125rem", fontWeight: "800", color: "#F97316", marginTop: "4px" }}>{stats[metricTab].after}</div>
            </div>
          </div>

          <p style={{ fontSize: "0.8125rem", color: "#70706a", marginTop: "16px", lineHeight: "1.5" }}>
            {stats[metricTab].desc}
          </p>
        </div>

      </div>

      <div className="ca-diagram-caption">
        Quote: &ldquo;Good product design reduces operational complexity while increasing business clarity.&rdquo;
      </div>
    </div>
  );
}

// 15. Future Product Roadmap Diagram (Phase 5, Image 04)
export function FutureProductRoadmap() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    { title: "Phase 01: Foundation", sub: "Operational Baseline", desc: "Standardize process templates, secure document vault, centralized client CRM records." },
    { title: "Phase 02: Automation", sub: "Workflow Triggers", desc: "Auto-calculated compliance deadlines, service-driven automated document request triggers." },
    { title: "Phase 03: Communication", sub: "Client Self-Service", desc: "Secure portal uploads, notification center, automatic invoice-to-payment matching." },
    { title: "Phase 04: AI Operations", sub: "Document Intelligence", desc: "Optical character recognition for tax notices, smart search, automated file parsing." },
    { title: "Phase 05: Analytics", sub: "Predictive Insights", desc: "Forecasting workload bottlenecks, team capacity planner, revenue analytics projections." },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Scalability Map</div>
      <div className="ca-diagram-title">Future Product Roadmap Timeline</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", minHeight: "360px", justifyContent: "center" }}>
        
        {/* Timeline phases steps */}
        <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "12px" }}>
          {phases.map((phase, idx) => {
            const isSelected = activePhase === idx;
            return (
              <div
                key={idx}
                className="ca-diagram-card ca-interactive-hover"
                style={{
                  minWidth: "150px",
                  flex: "1 0 auto",
                  border: isSelected ? "2px solid #F97316" : "1.5px solid #e7e7e1",
                  backgroundColor: isSelected ? "#FFF7ED" : "#ffffff",
                  cursor: "pointer",
                }}
                onClick={() => setActivePhase(idx)}
              >
                <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>P0{idx + 1}</span>
                <div style={{ fontSize: "0.8125rem", fontWeight: "700", color: isSelected ? "#ea580c" : "#1c1c1a", marginTop: "4px" }}>{phase.title.split(": ")[1]}</div>
                <div style={{ fontSize: "0.625rem", color: "#70706a", marginTop: "2px" }}>{phase.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Phase Details Card */}
        <div className="ca-diagram-card ca-diagram-card--orange-accent" style={{ background: "#ffffff", padding: "20px" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#ea580c" }}>{phases[activePhase].title}</span>
          <h4 style={{ fontSize: "1rem", fontWeight: "800", color: "#1c1c1a", margin: "4px 0" }}>{phases[activePhase].sub}</h4>
          <p style={{ fontSize: "0.8125rem", color: "#70706a", margin: 0, lineHeight: 1.5 }}>
            {phases[activePhase].desc} This phase scales the operational capabilities of accounting firms by shifting workload validation from human reminders to systematic automation.
          </p>
        </div>

      </div>
      <div className="ca-diagram-caption">
        Horizontal roadmap defining architectural milestones from process standardization to AI-assisted capacity forecast.
      </div>
    </div>
  );
}

// 16. Final Product Principles Diagram (Phase 5, Image 05)
export function FinalProductPrinciples() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  const principles = [
    { title: "Clarity over Complexity", desc: "Design interfaces that simplify accounting operations, surfacing information selectively." },
    { title: "Consistency Builds Trust", desc: "Identical button behaviors, components, and layout systems reduce cognitive friction." },
    { title: "Automation Supports Humans", desc: "Automate repetitive data copy tasks to free accountants for consultative advisory." },
    { title: "Single Source of Truth", desc: "Read and write data from one unified record to eliminate record duplicates." },
    { title: "Scalable Architecture", desc: "Ensure components, role frameworks, and workflows handle 10x volume easily." },
    { title: "Operational Transparency", desc: "Keep task status, compliance filing, and files visual for clients and accountants." },
  ];

  return (
    <div className="ca-diagram-canvas ca-diagram-canvas--auto">
      <div className="ca-diagram-subtitle">Design Philosophy</div>
      <div className="ca-diagram-title">Case Study Concluding Principles</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", minHeight: "360px", alignItems: "center" }}>
        {principles.map((pr, idx) => {
          const isHovered = hoveredPrinciple === pr.title;
          return (
            <div
              key={idx}
              className="ca-diagram-card ca-diagram-card--orange-accent ca-interactive-hover"
              style={{
                borderColor: isHovered ? "#F97316" : "#e7e7e1",
                backgroundColor: isHovered ? "#FFF7ED" : "#ffffff",
                transition: "all 200ms ease",
              }}
              onMouseEnter={() => setHoveredPrinciple(pr.title)}
              onMouseLeave={() => setHoveredPrinciple(null)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: "800", color: isHovered ? "#ea580c" : "#1c1c1a" }}>{pr.title}</span>
                <span className="ca-diagram-badge" style={{ fontSize: "0.55rem" }}>Rule 0{idx + 1}</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#70706a", margin: 0, lineHeight: "1.4" }}>{pr.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="ca-diagram-caption" style={{ marginTop: "16px" }}>
        Concluding statement: &ldquo;The goal was never to design another accounting tool. The goal was to design an Operating System that helps firms operate with clarity, confidence, and scale.&rdquo;
      </div>
    </div>
  );
}
