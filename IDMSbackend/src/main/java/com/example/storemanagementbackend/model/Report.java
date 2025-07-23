package com.example.storemanagementbackend.model;
 
import jakarta.persistence.*;
import java.time.LocalDate; // Use LocalDate for date field
 
@Entity
@Table(name = "reports") // Defines the table name in the database
public class Report {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increments ID
    private Long id; // Use Long for primary key
 
    @Column(nullable = false) // Ensures the type column cannot be null
    private String type; // employee, visit, oem, customer, blueprint, projection, achievement
 
    private String subtype; // daily, weekly, monthly, yearly (only for employee reports)
 
    @Column
    private String title;
 
    @Column(nullable = false)
    private LocalDate date; // Stores only date, no time
 
    @Column(nullable = false)
    private String status; // draft, submitted, approved
 
    private String submittedBy;
 
    private String approvedBy;
 
    private LocalDate approvedDate;
 
    @ElementCollection // For collections of basic types
    @CollectionTable(name = "report_attachments", joinColumns = @JoinColumn(name = "report_id"))
    @Column(name = "attachment_url")
    private java.util.List<String> attachments; // Stores URLs or filenames of attachments
 
    private String customerName;
    private String designation;
    private String landlineOrMobile;
    private String emailId;
    private String remarks;
    private String productOrRequirements;
    private String division;
    private String company;
    private String content; // Only used for non-customer reports
    private String quantity;
 
    // --- OEM Orders fields ---
    private String poNumber;
    private LocalDate orderDate;
    private String item;
    private String partNumber;
    private String xmwPrice;
    private String unitTotalOrderValue;
    private String totalPoValue;
    private String xmwInvoiceRef;
    private LocalDate xmwInvoiceDate;
    private String nre;
    private LocalDate quoteDate;
    private String quotationNumber;
    private String productDescription;
    private String xmwValue;
    // --- Competitor Analysis fields ---
    private Integer slNo;
    private String itemDescription;
    private String competitor;
    private String modelNumber;
    private String unitPrice;
 
    // Constructors
    public Report() {
    }
 
    public Report(String type, String subtype, String title, String content, LocalDate date, String status, String submittedBy) {
        this.type = type;
        this.subtype = subtype;
        this.title = title;
        this.content = content;
        this.date = date;
        this.status = status;
        this.submittedBy = submittedBy;
    }
 
    // Getters and Setters
    public Long getId() {
        return id;
    }
 
    public void setId(Long id) {
        this.id = id;
    }
 
    public String getType() {
        return type;
    }
 
    public void setType(String type) {
        this.type = type;
    }
 
    public String getSubtype() {
        return subtype;
    }
 
    public void setSubtype(String subtype) {
        this.subtype = subtype;
    }
 
    public String getTitle() {
        return title;
    }
 
    public void setTitle(String title) {
        this.title = title;
    }
 
    public LocalDate getDate() {
        return date;
    }
 
    public void setDate(LocalDate date) {
        this.date = date;
    }
 
    public String getStatus() {
        return status;
    }
 
    public void setStatus(String status) {
        this.status = status;
    }
 
    public String getSubmittedBy() {
        return submittedBy;
    }
 
    public void setSubmittedBy(String submittedBy) {
        this.submittedBy = submittedBy;
    }
 
    public String getApprovedBy() {
        return approvedBy;
    }
 
    public void setApprovedBy(String approvedBy) {
        this.approvedBy = approvedBy;
    }
 
    public LocalDate getApprovedDate() {
        return approvedDate;
    }
 
    public void setApprovedDate(LocalDate approvedDate) {
        this.approvedDate = approvedDate;
    }
 
    public java.util.List<String> getAttachments() {
        return attachments;
    }
 
    public void setAttachments(java.util.List<String> attachments) {
        this.attachments = attachments;
    }
 
    public String getCustomerName() {
        return customerName;
    }
 
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
 
    public String getDesignation() {
        return designation;
    }
 
    public void setDesignation(String designation) {
        this.designation = designation;
    }
 
    public String getLandlineOrMobile() {
        return landlineOrMobile;
    }
 
    public void setLandlineOrMobile(String landlineOrMobile) {
        this.landlineOrMobile = landlineOrMobile;
    }
 
    public String getEmailId() {
        return emailId;
    }
 
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
 
    public String getRemarks() {
        return remarks;
    }
 
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
 
    public String getProductOrRequirements() {
        return productOrRequirements;
    }
 
    public void setProductOrRequirements(String productOrRequirements) {
        this.productOrRequirements = productOrRequirements;
    }
 
    public String getDivision() {
        return division;
    }
 
    public void setDivision(String division) {
        this.division = division;
    }
 
    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }
 
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
 
    public String getQuantity() { return quantity; }
    public void setQuantity(String quantity) { this.quantity = quantity; }
 
    // --- OEM Orders fields ---
    public String getPoNumber() { return poNumber; }
    public void setPoNumber(String poNumber) { this.poNumber = poNumber; }
    public LocalDate getOrderDate() { return orderDate; }
    public void setOrderDate(LocalDate orderDate) { this.orderDate = orderDate; }
    public String getItem() { return item; }
    public void setItem(String item) { this.item = item; }
    public String getPartNumber() { return partNumber; }
    public void setPartNumber(String partNumber) { this.partNumber = partNumber; }
    public String getXmwPrice() { return xmwPrice; }
    public void setXmwPrice(String xmwPrice) { this.xmwPrice = xmwPrice; }
    public String getUnitTotalOrderValue() { return unitTotalOrderValue; }
    public void setUnitTotalOrderValue(String unitTotalOrderValue) { this.unitTotalOrderValue = unitTotalOrderValue; }
    public String getTotalPoValue() { return totalPoValue; }
    public void setTotalPoValue(String totalPoValue) { this.totalPoValue = totalPoValue; }
    public String getXmwInvoiceRef() { return xmwInvoiceRef; }
    public void setXmwInvoiceRef(String xmwInvoiceRef) { this.xmwInvoiceRef = xmwInvoiceRef; }
    public LocalDate getXmwInvoiceDate() { return xmwInvoiceDate; }
    public void setXmwInvoiceDate(LocalDate xmwInvoiceDate) { this.xmwInvoiceDate = xmwInvoiceDate; }
    public String getNre() { return nre; }
    public void setNre(String nre) { this.nre = nre; }
    public LocalDate getQuoteDate() { return quoteDate; }
    public void setQuoteDate(LocalDate quoteDate) { this.quoteDate = quoteDate; }
    public String getQuotationNumber() { return quotationNumber; }
    public void setQuotationNumber(String quotationNumber) { this.quotationNumber = quotationNumber; }
    public String getProductDescription() { return productDescription; }
    public void setProductDescription(String productDescription) { this.productDescription = productDescription; }
    public String getXmwValue() { return xmwValue; }
    public void setXmwValue(String xmwValue) { this.xmwValue = xmwValue; }
    // --- Competitor Analysis fields ---
    public Integer getSlNo() { return slNo; }
    public void setSlNo(Integer slNo) { this.slNo = slNo; }
    public String getItemDescription() { return itemDescription; }
    public void setItemDescription(String itemDescription) { this.itemDescription = itemDescription; }
    public String getCompetitor() { return competitor; }
    public void setCompetitor(String competitor) { this.competitor = competitor; }
    public String getModelNumber() { return modelNumber; }
    public void setModelNumber(String modelNumber) { this.modelNumber = modelNumber; }
    public String getUnitPrice() { return unitPrice; }
    public void setUnitPrice(String unitPrice) { this.unitPrice = unitPrice; }
 
    @Override
    public String toString() {
        return "Report{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", subtype='" + subtype + '\'' +
                ", title='" + title + '\'' +
                ", date=" + date +
                ", status='" + status + '\'' +
                ", submittedBy='" + submittedBy + '\'' +
                ", approvedBy='" + approvedBy + '\'' +
                ", approvedDate=" + approvedDate +
                ", attachments=" + attachments +
                ", customerName='" + customerName + '\'' +
                ", designation='" + designation + '\'' +
                ", landlineOrMobile='" + landlineOrMobile + '\'' +
                ", emailId='" + emailId + '\'' +
                ", remarks='" + remarks + '\'' +
                ", productOrRequirements='" + productOrRequirements + '\'' +
                ", division='" + division + '\'' +
                ", company='" + company + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
 