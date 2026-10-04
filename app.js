/**
 * AegisGuard — Autonomous Consumer Financial Defense & Dispute Resolution Swarm
 * Track 01: Agentic AI (Winning Hackathon Cockpit)
 * 
 * Interactive Orchestration Engine & Sovereign Gate
 */

// ============================================================================
// Scenarios Database
// ============================================================================
const SCENARIOS = {
  gym_trap: {
    id: "gym_trap",
    caseId: "CASE #AG-4091",
    tag: "PREDATORY BILLING DETECTED",
    tagClass: "tag-flagged",
    title: "Stealth 100% Price Hike & Zombie Mandate (Gym / SaaS Model)",
    amount: "$180.00",
    desc: "Forensic Auditor detected unnotified recurring fee increase from $29.99 to $59.99/mo across 3 billing cycles. Violates FTC ROSCA Section 5201.",
    winProb: "96%",
    statute: "FTC ROSCA § 5201",
    statuteSub: "Mandatory Notice Breach",
    networkCode: "Visa Code 13.5",
    networkSub: "Misrepresentation",
    creditImpact: "0.00 (Zero Risk)",
    disputeText: `TO: Dispute Processing Division, Chase Card Services / Visa Global Interbank Arbitration
RE: Formal Dispute Filing under Truth in Lending Act (15 U.S.C. § 1666) & Visa Reason Code 13.5
CARDHOLDER: Alex M. (Account Ending •••4821)
MERCHANT: IronFitness Digital / FitCorp Inc. (Merchant ID: MID-893120)

STATEMENT OF CLAIM:
The merchant unilaterally altered the recurring subscription fee from $29.99 to $59.99 without providing the statutory 30-day electronic pre-notification required under the Restore Online Shoppers' Confidence Act (ROSCA). Digital forensic timestamps prove cardholder attempts to cancel were blocked by non-compliant dark pattern hurdles. Requesting immediate clawback of $180.00 and revocation of recurring payment credential tokens.`,
    debateLogs: [
      {
        agent: "Forensic Auditor",
        role: "Ledger Analyst",
        avatar: "🔍",
        color: "#00f2fe",
        time: "12:41:02",
        msg: "Anomaly confirmed in Plaid ledger: 3 monthly charges of $59.99 posted on Oct 01, Sep 01, and Aug 01. Initial contract signed at promotional rate of $29.99.",
        evidence: "Plaid Ledger Hash: #tx_88a912"
      },
      {
        agent: "Red-Team Verifier",
        role: "Adversarial Auditor",
        avatar: "🛡️",
        color: "#10b981",
        time: "12:41:14",
        msg: "Challenging claim: Did cardholder consent to an automatic price jump in Section 4.2 of the merchant's Terms of Service during initial sign-up?",
        evidence: "Audit Query: TOS_Section_4_Consent"
      },
      {
        agent: "Evidence & Merchant",
        role: "TOS Scraper",
        avatar: "📁",
        color: "#f59e0b",
        time: "12:41:26",
        msg: "Evidence check completed: Scraped Merchant TOS version active at signup. Merchant relies on a pre-checked box and forced phone cancellation with 45m hold times (Dark Pattern).",
        evidence: "Captured DOM Snapshot: #darkpattern_cancel"
      },
      {
        agent: "Legal & Regulatory",
        role: "Statute Matcher",
        avatar: "⚖️",
        color: "#8b5cf6",
        time: "12:41:39",
        msg: "Under FTC ROSCA (15 U.S.C. § 8403) and CFPB Circular 2022-07, negative option billing without explicit, unbundled consent and simple 1-click cancellation is illegal per se. Visa Reason Code 13.5 (Misrepresentation) applies directly. Win probability: 96%.",
        evidence: "Statute: 15 U.S.C. § 8403"
      },
      {
        agent: "Red-Team Verifier",
        role: "Adversarial Auditor",
        avatar: "🛡️",
        color: "#10b981",
        time: "12:41:48",
        msg: "Claim validated. Hallucination risk: 0.00%. Evidence provenance verified. Halting system execution and locking at Human Sovereign Risk Gate for operator sign-off.",
        evidence: "Sovereign Gate Lock: ENGAGED"
      }
    ],
    agentThoughts: {
      forensic: "Scanned 180 days of bank transaction data via Plaid API. Isolated 3 unauthorized recurring debits of $59.99 following an initial $29.99 promotional sign-up.",
      legal: "Cross-referenced statutory codes: Merchant failed to provide mandatory 30-day notice under FTC ROSCA Section 5201 & CFPB Rule 1005.10(d). Matched Visa Reason Code 13.5.",
      evidence: "Scraped merchant cancellation workflow: Detected intentional friction (hidden phone cancellation requirement with 45m hold time). Compiled digital evidence dossier.",
      verifier: "Audited evidence provenance: Zero false assertions. Win probability verified at 96.2%. Halting system autonomy at Human Sovereign Risk Gate."
    },
    tools: {
      forensic: ["plaid_ledger_probe", "price_drift_detector"],
      legal: ["cfpb_statute_match", "visa_code_13_5"],
      evidence: ["web_tos_scraper", "dark_pattern_indexer"],
      verifier: ["provenance_auditor", "blast_radius_calc"]
    },
    evidenceList: [
      {
        icon: "💳",
        title: "Bank Ledger Transaction Anomaly",
        desc: "Debit of $59.99 on Oct 01, Sep 01, and Aug 01 against promotional rate of $29.99. Total Delta: $90.00 unnotified surge + $90.00 continued uncancelled charges.",
        meta: "Plaid Ledger Hash: #tx_88a912"
      },
      {
        icon: "📜",
        title: "FTC ROSCA Non-Compliance Record",
        desc: "Federal law 15 U.S.C. § 8403 mandates clear simple cancellation mechanism and 30-day pre-notification before subscription rate hikes.",
        meta: "Statute: 15 U.S.C. § 8403(2)"
      },
      {
        icon: "📸",
        title: "Dark Pattern Friction Capture",
        desc: "Automated browser trace captured cancellation barrier: Web cancel button disabled; forces phone call to unstaffed queue.",
        meta: "Trace Hash: #sha256_e814a"
      }
    ],
    executionLogs: [
      { cmd: "aegisguard dispatch --case AG-4091 --target visa_dispute_api", out: "Connecting to Chase Card Services Dispute Gateway via secure mTLS...\nAuthentication: Validated with Sovereign Human Biometric Token." },
      { cmd: "POST /v1/chargebacks/disputes/file", out: "{\n  \"case_id\": \"DISP-99214-CHASE\",\n  \"reason_code\": \"13.5_MISREPRESENTATION\",\n  \"claim_amount\": 180.00,\n  \"currency\": \"USD\",\n  \"status\": \"PROVISIONAL_CREDIT_ISSUED\"\n}" },
      { cmd: "POST /v1/card_network/mandates/revoke-token", out: "Recurring Token: tok_fitcorp_9942a permanently revoked.\nMerchant is barred from subsequent ledger debit requests." },
      { cmd: "aegisguard verify-reversal --account ch_4821", out: "SUCCESS: Provisional credit of $180.00 posted to Cardholder account.\nCard issuer has initiated formal 30-day merchant arbitration response clock." }
    ],
    resolution: {
      recovered: "$180.00",
      target: "IronFitness Digital / FitCorp Inc.",
      timeToResolve: "54 seconds (Traditional banking dispute: 28 days)",
      statutoryBasis: "FTC ROSCA § 5201 & Visa Reason Code 13.5",
      auditHash: "SHA-256: 8f2a49b81c4e9072fd9821aa410c558b"
    }
  },

  airline_double: {
    id: "airline_double",
    caseId: "CASE #AG-3104",
    tag: "BILLING ERROR DETECTED",
    tagClass: "tag-flagged",
    title: "Double-Billed Airline Baggage & Hidden Surcharge",
    amount: "$120.00",
    desc: "Merchant payment processor duplicated $120.00 ancillary baggage charge across passenger ticket reservation PNR-88419.",
    winProb: "99%",
    statute: "12 CFR § 1026.13",
    statuteSub: "Billing Error Redress",
    networkCode: "Visa Code 13.1",
    networkSub: "Incorrect Amount",
    creditImpact: "0.00 (Zero Risk)",
    disputeText: `TO: Dispute Processing Division, Chase Card Services / Visa Global Interbank Arbitration
RE: Formal Dispute Filing under Regulation Z (12 CFR § 1026.13) & Visa Reason Code 13.1
CARDHOLDER: Alex M. (Account Ending •••4821)
MERCHANT: SkyAirways Global / Airline Ticketing Services

STATEMENT OF CLAIM:
Cardholder reservation PNR-88419 was duplicate-billed for checked baggage ancillary fees ($60.00 x 2 = $120.00 duplicate ledger charge). Merchant receipt clearly shows baggage was paid at online check-in, yet a secondary charge was posted at kiosk boarding without cardholder authorization. Requesting immediate clawback of $120.00 under Visa Chargeback Reason Code 13.1.`,
    debateLogs: [
      {
        agent: "Forensic Auditor",
        role: "Ledger Analyst",
        avatar: "🔍",
        color: "#00f2fe",
        time: "12:42:04",
        msg: "Detected duplicate debit: $120.00 posted twice within 2.8 seconds under same terminal auth token #AUTH-29401.",
        evidence: "Ledger Hash: #tx_twin_120"
      },
      {
        agent: "Red-Team Verifier",
        role: "Adversarial Auditor",
        avatar: "🛡️",
        color: "#10b981",
        time: "12:42:15",
        msg: "Was this a split baggage authorization for two distinct passengers traveling on the same itinerary?",
        evidence: "Cross-Reference: PNR_Passenger_Manifest"
      },
      {
        agent: "Evidence & Merchant",
        role: "OCR Analyst",
        avatar: "📁",
        color: "#f59e0b",
        time: "12:42:25",
        msg: "Passenger manifest parsed: Single cardholder traveling solo on PNR-88419. Only one bag tagged at conveyor gate.",
        evidence: "Boarding Pass OCR: Solo Traveler Verified"
      },
      {
        agent: "Legal & Regulatory",
        role: "Statute Matcher",
        avatar: "⚖️",
        color: "#8b5cf6",
        time: "12:42:37",
        msg: "Under Regulation Z (12 CFR § 1026.13) and Visa Chargeback Reason Code 13.1 (Incorrect Transaction Amount/Duplicate Processing), cardholder is entitled to immediate reversal. Win probability: 99%.",
        evidence: "Statute: 12 CFR § 1026.13"
      },
      {
        agent: "Red-Team Verifier",
        role: "Adversarial Auditor",
        avatar: "🛡️",
        color: "#10b981",
        time: "12:42:48",
        msg: "Zero discrepancy risk confirmed. Locking autonomy at Human Sovereign Risk Gate for 1-click authorization.",
        evidence: "Sovereign Gate Lock: ENGAGED"
      }
    ],
    agentThoughts: {
      forensic: "Extracted transaction metadata: Exact timestamp match for twin $120.00 charges with identical authorization codes within 3 seconds of each other.",
      legal: "Regulation Z § 1026.13 explicitly mandates immediate creditor investigation and provisional credit for duplicate transaction errors.",
      evidence: "Parsed digital passenger boarding pass PDF and email receipt confirming only single baggage allowance purchased.",
      verifier: "Evidence verified against airline ticketing database. 99.1% Win Probability certified. Locked at Human Sovereign Gate."
    },
    tools: {
      forensic: ["pnr_receipt_ocr", "twin_charge_detector"],
      legal: ["reg_z_statute_match", "visa_code_13_1"],
      evidence: ["ticket_pdf_analyzer", "terminal_audit"],
      verifier: ["provenance_auditor", "blast_radius_calc"]
    },
    evidenceList: [
      {
        icon: "🎫",
        title: "Airline Receipt & PNR Metadata",
        desc: "Booking PNR-88419 shows single checked bag allowance itemized at $60.00.",
        meta: "E-Ticket Ref: #TK-099412"
      },
      {
        icon: "💳",
        title: "Duplicate Ledger Debit Timestamp",
        desc: "Card ledger records two concurrent debits of $120.00 within 2.8 seconds at airport terminal gate.",
        meta: "Merchant Auth: #AUTH-29401"
      }
    ],
    executionLogs: [
      { cmd: "aegisguard dispatch --case AG-3104 --rule visa_13_1", out: "Dispatching Visa Reason Code 13.1 (Duplicate Processing) chargeback petition..." },
      { cmd: "POST /v1/chargebacks/disputes/file", out: "{\n  \"case_id\": \"DISP-88192-AIRLINE\",\n  \"reason_code\": \"13.1_DUPLICATE_CHARGE\",\n  \"claim_amount\": 120.00,\n  \"status\": \"IMMEDIATE_CREDIT_GRANTED\"\n}" },
      { cmd: "aegisguard verify-reversal --account ch_4821", out: "SUCCESS: Card issuer credited $120.00 to cardholder statement. Case closed in favor of consumer." }
    ],
    resolution: {
      recovered: "$120.00",
      target: "SkyAirways Global",
      timeToResolve: "42 seconds (Standard airline customer support: 45 days)",
      statutoryBasis: "Regulation Z § 1026.13 & Visa Code 13.1",
      auditHash: "SHA-256: 4e9128ba7f0932bb147820cc901ef23a"
    }
  },

  cloud_leak: {
    id: "cloud_leak",
    caseId: "CASE #AG-5502",
    tag: "ENTERPRISE LEAK DETECTED",
    tagClass: "tag-flagged",
    title: "Unauthorized Cloud Infrastructure Overcharge",
    amount: "$480.00",
    desc: "Cloud compute container pool continued racking up idle hourly compute billing ($480.00) after confirmed trial cancellation timestamp.",
    winProb: "94%",
    statute: "UCC Article 2 & Merchant SLA",
    statuteSub: "Breach of De-provisioning SLA",
    networkCode: "Mastercard 4853",
    networkSub: "Defective / Cancelled Service",
    creditImpact: "0.00 (Zero Risk)",
    disputeText: `TO: Dispute Processing Division, Commercial Banking Services
RE: Formal Commercial Dispute Filing under UCC Article 2 & Mastercard Chargeback Reason Code 4853
CARDHOLDER: Alex M. / TechVanguard LLC (Account Ending •••4821)
MERCHANT: CloudHost Infrastructure Inc. (Merchant ID: MID-441029)

STATEMENT OF CLAIM:
Cardholder explicitly de-provisioned all virtual machine clusters and cancelled subscription on Sep 15 with confirmation receipt #CN-9941. Merchant infrastructure failed to shut down zombie worker nodes due to an internal webhook failure, running unauthorized compute charges of $480.00. Requesting immediate clawback and merchant account billing freeze.`,
    debateLogs: [
      {
        agent: "Forensic Auditor",
        role: "Ledger Analyst",
        avatar: "🔍",
        color: "#00f2fe",
        time: "12:43:01",
        msg: "Detected continuous post-trial compute billing totaling $480.00 across 8 orphaned container instances.",
        evidence: "CloudTrail Stream: #audit_leak_480"
      },
      {
        agent: "Red-Team Verifier",
        role: "Adversarial Auditor",
        avatar: "🛡️",
        color: "#10b981",
        time: "12:43:11",
        msg: "Did user leave persistent storage volumes (EBS/S3) actively storing un-deleted data?",
        evidence: "Query: Volume_Attachment_Check"
      },
      {
        agent: "Evidence & Merchant",
        role: "API Auditor",
        avatar: "📁",
        color: "#f59e0b",
        time: "12:43:22",
        msg: "API receipts prove full volume deletion confirmed on Sep 15. The $480 is 100% idle compute leak caused by merchant failure to terminate pods.",
        evidence: "Receipt Hash: #sha256_99b41a"
      },
      {
        agent: "Legal & Regulatory",
        role: "Statute Matcher",
        avatar: "⚖️",
        color: "#8b5cf6",
        time: "12:43:35",
        msg: "Breach of SLA under UCC Article 2 and Mastercard Code 4853 (Defective/Cancelled Service). Win probability: 94%.",
        evidence: "Statute: UCC Article 2"
      },
      {
        agent: "Red-Team Verifier",
        role: "Adversarial Auditor",
        avatar: "🛡️",
        color: "#10b981",
        time: "12:43:44",
        msg: "Evidence solid. Halting system at Human Sovereign Gate.",
        evidence: "Sovereign Gate Lock: ENGAGED"
      }
    ],
    agentThoughts: {
      forensic: "Queried cloud billing log stream and compared against de-provisioning API timestamps: Compute instances ran idle with zero network I/O.",
      legal: "Under UCC Article 2 and CloudHost SLA Section 12, customer liability terminates upon confirmed cryptographic de-provisioning acknowledgment.",
      evidence: "Cryptographic confirmation receipt #CN-9941 matched with zero socket connections in AWS CloudTrail audit logs.",
      verifier: "Verified zero resource consumption. Win probability: 94.4%. Locked at Human Sovereign Gate."
    },
    tools: {
      forensic: ["cloudtrail_audit", "zombie_node_detector"],
      legal: ["ucc_breach_matcher", "mc_code_4853"],
      evidence: ["cancellation_receipt_hash", "network_io_verifier"],
      verifier: ["provenance_auditor", "blast_radius_calc"]
    },
    evidenceList: [
      {
        icon: "☁️",
        title: "Cryptographic De-provisioning Receipt",
        desc: "Confirmation receipt #CN-9941 generated on Sep 15 @ 14:22 UTC with signature from merchant API gateway.",
        meta: "Receipt Hash: #sha256_99b41a"
      },
      {
        icon: "📊",
        title: "Zero Ingress/Egress Network Proof",
        desc: "Traffic telemetry proves virtual instances generated 0 packets of customer workload between Sep 15 and Oct 01.",
        meta: "CloudWatch Log: 0.000 MB/s"
      }
    ],
    executionLogs: [
      { cmd: "aegisguard dispatch --case AG-5502 --mastercard-code 4853", out: "Dispatching Commercial Merchant Dispute to Merchant Acquiring Bank..." },
      { cmd: "POST /v1/commercial/disputes/file", out: "{\n  \"case_id\": \"COMM-DISP-99412\",\n  \"merchant\": \"CloudHost Infrastructure\",\n  \"claim_amount\": 480.00,\n  \"status\": \"MERCHANT_CREDIT_GRANTED\"\n}" },
      { cmd: "aegisguard verify-reversal --account ch_4821", out: "SUCCESS: Merchant issued full invoice credit reversal of $480.00." }
    ],
    resolution: {
      recovered: "$480.00",
      target: "CloudHost Infrastructure Inc.",
      timeToResolve: "1m 12s (Enterprise support resolution: 60 days)",
      statutoryBasis: "UCC Article 2 & Mastercard Code 4853",
      auditHash: "SHA-256: 77a19c43e01928ba48201fa872110cba"
    }
  }
};

// ============================================================================
// State
// ============================================================================
let currentScenario = SCENARIOS.gym_trap;
let totalClawback = 2450.00;

// ============================================================================
// DOM References
// ============================================================================
const dom = {
  // Banner
  bannerTitle: document.getElementById("banner-title"),
  bannerDesc: document.getElementById("banner-desc"),
  bannerAmount: document.getElementById("banner-amount"),
  totalClawbackVal: document.getElementById("total-clawback-val"),
  reAuditBtn: document.getElementById("re-audit-btn"),

  // Agent Thoughts & Badges
  forensicThought: document.getElementById("forensic-thought"),
  legalThought: document.getElementById("legal-thought"),
  evidenceThought: document.getElementById("evidence-thought"),
  verifierThought: document.getElementById("verifier-thought"),
  verifierBadge: document.getElementById("verifier-badge"),

  // Sovereign Gate
  winProbVal: document.getElementById("win-prob-val"),
  dimAmount: document.getElementById("dim-amount"),
  dimCredit: document.getElementById("dim-credit"),
  dimStatute: document.getElementById("dim-statute"),
  dimNetworkCode: document.getElementById("dim-network-code"),
  disputePreviewText: document.getElementById("dispute-preview-text"),
  authorizeDisputeBtn: document.getElementById("authorize-dispute-btn"),
  editClaimBtn: document.getElementById("edit-claim-btn"),
  dismissClaimBtn: document.getElementById("dismiss-claim-btn"),
  gateAlertPill: document.getElementById("gate-alert-pill"),

  // Tabs
  tabBtns: document.querySelectorAll(".tab-btn"),
  tabPanes: document.querySelectorAll(".tab-pane"),
  dossierContainer: document.getElementById("dossier-container"),
  debateContainer: document.getElementById("debate-chat-container"),
  sandboxShellBody: document.getElementById("sandbox-shell-body"),

  // Strategy Selector
  strategyBtns: document.querySelectorAll(".strategy-btn"),
  strategySelectedBadge: document.getElementById("strategy-selected-badge"),

  // Modals
  problemModal: document.getElementById("problem-modal"),
  openProblemBtn: document.getElementById("open-problem-btn"),
  closeProblemModalBtn: document.getElementById("close-problem-modal-btn"),
  ackProblemBtn: document.getElementById("ack-problem-btn"),

  rubricModal: document.getElementById("rubric-modal"),
  openRubricBtn: document.getElementById("open-rubric-btn"),
  closeRubricModalBtn: document.getElementById("close-rubric-modal-btn"),
  ackRubricBtn: document.getElementById("ack-rubric-btn"),

  scenarioModal: document.getElementById("scenario-modal"),
  launchScenarioBtn: document.getElementById("launch-scenario-btn"),
  closeScenarioModalBtn: document.getElementById("close-scenario-modal-btn"),
  cancelScenarioBtn: document.getElementById("cancel-scenario-btn"),
  applyScenarioBtn: document.getElementById("apply-scenario-btn"),
  scenarioItems: document.querySelectorAll(".scenario-item"),

  editModal: document.getElementById("edit-modal"),
  closeEditModalBtn: document.getElementById("close-edit-modal-btn"),
  cancelEditBtn: document.getElementById("cancel-edit-btn"),
  saveEditBtn: document.getElementById("save-edit-btn"),
  editAmountInput: document.getElementById("edit-amount-input"),
  editTextInput: document.getElementById("edit-text-input"),

  resolutionModal: document.getElementById("resolution-modal"),
  closeResolutionModalBtn: document.getElementById("close-resolution-modal-btn"),
  dismissResolutionBtn: document.getElementById("dismiss-resolution-btn"),
  downloadReportBtn: document.getElementById("download-report-btn"),
  resolutionContent: document.getElementById("resolution-content")
};

// ============================================================================
// Initialization
// ============================================================================
function init() {
  bindEvents();
  renderScenario(currentScenario);
}

// ============================================================================
// Event Handlers
// ============================================================================
function bindEvents() {
  // Tabs
  dom.tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Problem Modal
  dom.openProblemBtn.addEventListener("click", () => dom.problemModal.classList.remove("hidden"));
  dom.closeProblemModalBtn.addEventListener("click", () => dom.problemModal.classList.add("hidden"));
  dom.ackProblemBtn.addEventListener("click", () => dom.problemModal.classList.add("hidden"));

  // Rubric Modal
  if (dom.openRubricBtn) dom.openRubricBtn.addEventListener("click", () => dom.rubricModal.classList.remove("hidden"));
  if (dom.closeRubricModalBtn) dom.closeRubricModalBtn.addEventListener("click", () => dom.rubricModal.classList.add("hidden"));
  if (dom.ackRubricBtn) dom.ackRubricBtn.addEventListener("click", () => dom.rubricModal.classList.add("hidden"));

  // Strategy Selector (Human Steering)
  if (dom.strategyBtns) {
    dom.strategyBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        dom.strategyBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const strat = btn.getAttribute("data-strategy");
        applyStrategy(strat);
      });
    });
  }

  // Scenario Modal
  dom.launchScenarioBtn.addEventListener("click", () => dom.scenarioModal.classList.remove("hidden"));
  dom.closeScenarioModalBtn.addEventListener("click", () => dom.scenarioModal.classList.add("hidden"));
  dom.cancelScenarioBtn.addEventListener("click", () => dom.scenarioModal.classList.add("hidden"));
  dom.scenarioItems.forEach(item => {
    item.addEventListener("click", () => {
      dom.scenarioItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
  dom.applyScenarioBtn.addEventListener("click", () => {
    const selected = document.querySelector(".scenario-item.selected");
    const key = selected ? selected.getAttribute("data-scenario") : "gym_trap";
    dom.scenarioModal.classList.add("hidden");
    loadScenario(key);
  });

  // Edit Modal (Human Steering)
  dom.editClaimBtn.addEventListener("click", () => {
    dom.editAmountInput.value = currentScenario.amount;
    dom.editTextInput.value = currentScenario.disputeText;
    dom.editModal.classList.remove("hidden");
  });
  dom.closeEditModalBtn.addEventListener("click", () => dom.editModal.classList.add("hidden"));
  dom.cancelEditBtn.addEventListener("click", () => dom.editModal.classList.add("hidden"));
  dom.saveEditBtn.addEventListener("click", applyClaimEdit);

  // Sovereign Gate Decisions
  dom.authorizeDisputeBtn.addEventListener("click", executeAuthorizedDispute);
  dom.dismissClaimBtn.addEventListener("click", dismissClaim);

  // Resolution Modal
  dom.closeResolutionModalBtn.addEventListener("click", () => dom.resolutionModal.classList.add("hidden"));
  dom.dismissResolutionBtn.addEventListener("click", () => dom.resolutionModal.classList.add("hidden"));
  dom.downloadReportBtn.addEventListener("click", downloadAuditReport);

  // Re-audit
  dom.reAuditBtn.addEventListener("click", () => loadScenario(currentScenario.id));
}

// ============================================================================
// Tab Management
// ============================================================================
function switchTab(tabId) {
  dom.tabBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-tab") === tabId));
  dom.tabPanes.forEach(p => p.classList.toggle("active", p.id === tabId));
}

// ============================================================================
// Scenario Rendering
// ============================================================================
function loadScenario(key) {
  currentScenario = SCENARIOS[key];
  renderScenario(currentScenario);
  switchTab("tab-sovereign-gate");
}

function renderScenario(sc) {
  // Banner
  dom.bannerTitle.textContent = `${sc.caseId}: ${sc.title}`;
  dom.bannerDesc.textContent = sc.desc;
  dom.bannerAmount.textContent = `Amount at Risk: ${sc.amount}`;

  // Swarm Thoughts
  dom.forensicThought.textContent = sc.agentThoughts.forensic;
  dom.legalThought.textContent = sc.agentThoughts.legal;
  dom.evidenceThought.textContent = sc.agentThoughts.evidence;
  dom.verifierThought.textContent = sc.agentThoughts.verifier;
  dom.verifierBadge.textContent = "GATE LOCKED";
  dom.verifierBadge.className = "agent-badge badge-gate";

  // Sovereign Gate
  dom.winProbVal.textContent = sc.winProb;
  dom.dimAmount.textContent = sc.amount;
  dom.dimCredit.textContent = sc.creditImpact;
  dom.dimStatute.textContent = sc.statute;
  dom.dimNetworkCode.textContent = sc.networkCode;

  // Dispute Text
  dom.disputePreviewText.innerHTML = sc.disputeText.split("\n\n").map(para => `<p>${escapeHtml(para)}</p>`).join("");

  // Gate Button Reset
  dom.gateAlertPill.style.display = "inline-block";
  dom.authorizeDisputeBtn.disabled = false;
  dom.authorizeDisputeBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Authorize Dispute & Clawback
  `;
  dom.authorizeDisputeBtn.classList.add("pulse-emerald");

  // Reset Strategy Selector
  if (dom.strategyBtns) {
    dom.strategyBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-strategy") === "chargeback"));
    if (dom.strategySelectedBadge) {
      dom.strategySelectedBadge.textContent = "Recommended Tier";
      dom.strategySelectedBadge.className = "badge badge-emerald";
    }
  }

  // Evidence Dossier
  renderDossier(sc.evidenceList);

  // Swarm Consensus & Debate
  renderDebateLogs(sc.debateLogs);

  // Terminal Seed
  renderTerminalSeed(sc);
}

function applyStrategy(strat) {
  if (strat === "amicable") {
    dom.winProbVal.textContent = "91%";
    if (dom.strategySelectedBadge) {
      dom.strategySelectedBadge.textContent = "Amicable 48h Notice";
      dom.strategySelectedBadge.className = "badge badge-cyan";
    }
    dom.disputePreviewText.innerHTML = `
      <p><strong>TO:</strong> Merchant Customer Resolution & Executive Billing Team</p>
      <p><strong>SUBJECT:</strong> Notice of Statutory Billing Discrepancy & Amicable Refund Demand (48-Hour Cure Period)</p>
      <p><strong>STATEMENT OF CLAIM:</strong> Merchant is notified of an unauthorized recurring charge increase (${currentScenario.amount}). Cardholder demands immediate voluntary reimbursement and token cancellation within 48 business hours prior to formal Visa arbitration and CFPB regulatory referral.</p>
    `;
  } else if (strat === "chargeback") {
    dom.winProbVal.textContent = currentScenario.winProb;
    if (dom.strategySelectedBadge) {
      dom.strategySelectedBadge.textContent = "Recommended Tier";
      dom.strategySelectedBadge.className = "badge badge-emerald";
    }
    dom.disputePreviewText.innerHTML = currentScenario.disputeText.split("\n\n").map(para => `<p>${escapeHtml(para)}</p>`).join("");
  } else if (strat === "cfpb") {
    dom.winProbVal.textContent = "99%";
    if (dom.strategySelectedBadge) {
      dom.strategySelectedBadge.textContent = "Federal Escalation Active";
      dom.strategySelectedBadge.className = "badge badge-red";
    }
    dom.disputePreviewText.innerHTML = `
      <p><strong>TO:</strong> Consumer Financial Protection Bureau (CFPB) & Visa Interbank Chargeback Arbitration</p>
      <p><strong>RE:</strong> Enforcement Complaint under 12 CFR Part 1005 & FTC ROSCA Section 5201</p>
      <p><strong>STATEMENT OF CLAIM:</strong> Cardholder files formal regulatory complaint against Merchant for unlawful deceptive billing, failure to provide pre-notification, and intentional cancellation dark patterns. Demanding immediate chargeback of ${currentScenario.amount} plus regulatory audit of merchant payment gateway credentials.</p>
    `;
  }
}

function renderDebateLogs(debateLogs) {
  if (!dom.debateContainer || !debateLogs) return;
  dom.debateContainer.innerHTML = debateLogs.map(item => `
    <div class="debate-item">
      <div class="debate-avatar" style="background:${item.color}25; color:${item.color}; border: 1px solid ${item.color}50;">
        ${item.avatar}
      </div>
      <div class="debate-content">
        <div class="debate-meta-row">
          <div>
            <span class="debate-agent-title" style="color:${item.color}">${escapeHtml(item.agent)}</span>
            <span class="debate-role-tag">(${escapeHtml(item.role)})</span>
          </div>
          <span class="debate-timestamp">${item.time}</span>
        </div>
        <div class="debate-message-body">${escapeHtml(item.msg)}</div>
        <div class="debate-evidence-link">
          <span>&gt; EVIDENCE PROVENANCE:</span> ${escapeHtml(item.evidence)}
        </div>
      </div>
    </div>
  `).join("");
}

function renderDossier(evidenceList) {
  dom.dossierContainer.innerHTML = evidenceList.map(item => `
    <div class="evidence-card">
      <div class="evidence-icon">${item.icon}</div>
      <div class="evidence-body">
        <div class="evidence-header">
          <span class="evidence-title">${escapeHtml(item.title)}</span>
          <span class="evidence-meta-pill">${escapeHtml(item.meta)}</span>
        </div>
        <p class="evidence-desc">${escapeHtml(item.desc)}</p>
      </div>
    </div>
  `).join("");
}

function renderTerminalSeed(sc) {
  dom.sandboxShellBody.innerHTML = `
    <div class="shell-line"><span class="shell-prompt">aegisguard@gateway:~$</span> <span class="shell-cmd">aegisguard audit --case ${sc.id}</span></div>
    <div class="shell-line shell-warn">[AUTONOMOUS SWARM CONSENSUS REACHED] Forensic, Legal, Evidence, and Red-Team agents certified evidence.</div>
    <div class="shell-line text-muted">========================================================================================</div>
    <div class="shell-line shell-success">[WIN PROBABILITY] ${sc.winProb} High Confidence | Target Statutory Claim: ${sc.statute}</div>
    <div class="shell-line shell-danger">[SOVEREIGN LOCK ENGAGED] Autonomous execution halted at Human Sovereign Gate. Standing by for authorization.</div>
    <div class="shell-line"><span class="shell-prompt">aegisguard@gateway:~$</span> <span class="shell-cmd">awaiting operator_authorization...</span></div>
  `;
}

// ============================================================================
// Sovereign Decision: Human Authorizes Dispute
// ============================================================================
function executeAuthorizedDispute() {
  if (dom.authorizeDisputeBtn.disabled) return;

  dom.authorizeDisputeBtn.disabled = true;
  dom.authorizeDisputeBtn.classList.remove("pulse-emerald");
  dom.authorizeDisputeBtn.innerHTML = `Dispatched to Interbank Dispute API...`;

  playSuccessChime();

  // Switch to Sandbox Terminal
  switchTab("tab-terminal");

  const terminal = dom.sandboxShellBody;
  terminal.innerHTML += `
    <div class="shell-line shell-success" style="margin-top:14px; font-weight:700;">
      [SOVEREIGN BIOMETRIC SIGNATURE RECORDED] Operator Alex M. authorized interbank dispute filing AUTH-${Math.floor(1000 + Math.random() * 9000)}.
    </div>
    <div class="shell-line shell-prompt">Executing automated clawback sequence:</div>
  `;

  let idx = 0;
  const logs = currentScenario.executionLogs;

  const interval = setInterval(() => {
    if (idx < logs.length) {
      const item = logs[idx];
      terminal.innerHTML += `
        <div class="shell-line" style="margin-top:6px;"><span class="shell-prompt">$</span> <span class="shell-cmd">${escapeHtml(item.cmd)}</span></div>
        <div class="shell-line text-muted" style="white-space: pre-wrap;">${escapeHtml(item.out)}</div>
      `;
      terminal.scrollTop = terminal.scrollHeight;
      idx++;
    } else {
      clearInterval(interval);
      completeClawbackSuccess();
    }
  }, 1100);
}

function completeClawbackSuccess() {
  const terminal = dom.sandboxShellBody;
  terminal.innerHTML += `
    <div class="shell-line shell-success" style="margin-top:14px; font-weight:800; font-size:0.84rem;">
      [CLAWBACK CONFIRMED] Banking Portal acknowledged statutory dispute. Funds returned. Mandate revoked.
    </div>
  `;
  terminal.scrollTop = terminal.scrollHeight;

  // Update Status
  dom.gateAlertPill.style.display = "none";
  dom.verifierBadge.textContent = "VERIFIED & FILED";
  dom.verifierBadge.className = "agent-badge badge-done";
  dom.authorizeDisputeBtn.innerHTML = `✓ Dispute Filed & Clawback Granted`;

  // Update Total Clawback
  const numericAmount = parseFloat(currentScenario.amount.replace(/[^0-9.]/g, "")) || 0;
  totalClawback += numericAmount;
  dom.totalClawbackVal.textContent = `$${totalClawback.toFixed(2)}`;

  setTimeout(() => {
    openResolutionModal();
  }, 1400);
}

// ============================================================================
// Sovereign Decision: Dismiss Claim
// ============================================================================
function dismissClaim() {
  if (confirm("Are you sure you want to dismiss this claim? No dispute will be filed.")) {
    dom.gateAlertPill.style.display = "none";
    dom.authorizeDisputeBtn.disabled = true;
    dom.authorizeDisputeBtn.innerHTML = `Claim Dismissed by User`;
    alert("Claim dismissed. The agent will not file any dispute or alter merchant tokens.");
  }
}

// ============================================================================
// Human Steering: Edit Claim
// ============================================================================
function applyClaimEdit() {
  const newAmount = dom.editAmountInput.value.trim();
  const newText = dom.editTextInput.value.trim();

  if (newAmount) currentScenario.amount = newAmount;
  if (newText) currentScenario.disputeText = newText;

  dom.dimAmount.textContent = currentScenario.amount;
  dom.bannerAmount.textContent = `Amount at Risk: ${currentScenario.amount}`;
  dom.disputePreviewText.innerHTML = currentScenario.disputeText.split("\n\n").map(para => `<p>${escapeHtml(para)}</p>`).join("");

  dom.editModal.classList.add("hidden");
  alert("Claim parameters successfully modified by Human Operator. The agent swarm has synchronized the update.");
}

// ============================================================================
// Resolution Audit Modal & Export
// ============================================================================
function openResolutionModal() {
  const res = currentScenario.resolution;
  dom.resolutionContent.innerHTML = `
    <div class="callout-emerald mb-3">
      <strong>Clawback Authorized:</strong> Full recovery of <strong>${res.recovered}</strong> approved by card issuer.
    </div>
    
    <div style="font-size:0.84rem; line-height:1.6; color:#cbd5e1;">
      <p><strong>Merchant:</strong> ${res.target}</p>
      <p><strong>Execution MTTR:</strong> ${res.timeToResolve}</p>
      <p><strong>Statutory Basis:</strong> ${res.statutoryBasis}</p>
      <p><strong>Cryptographic Audit Proof:</strong> <code style="font-family:'Fira Code',monospace; color:#38bdf8;">${res.auditHash}</code></p>
      <p><strong>Next Steps:</strong> Recurring bank mandate severed. Merchant cannot charge this account again.</p>
    </div>
  `;
  dom.resolutionModal.classList.remove("hidden");
}

function downloadAuditReport() {
  const res = currentScenario.resolution;
  const content = `# AegisGuard Certified Dispute Resolution Receipt
Case: ${currentScenario.caseId}
Date: ${new Date().toISOString()}
Recovered Amount: ${res.recovered}
Merchant: ${res.target}
Statutory Basis: ${res.statutoryBasis}
Cryptographic Hash: ${res.auditHash}
Resolution Time: ${res.timeToResolve}

Human Sovereign Authorization: Granted by Alex M.
Zero Credit Score Impact Certified.
`;
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `AegisGuard-${currentScenario.id}-Audit.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================================
// Audio Feedback (Web Audio API)
// ============================================================================
function playSuccessChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.2); // C6

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Boot
window.addEventListener("DOMContentLoaded", init);
