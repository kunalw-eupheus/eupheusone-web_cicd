import React from "react";
import { Link } from "react-router-dom";
import eupheusLogo from "./eupheusLogo.png";

const AofPdf2 = () => {
  return (
    <div>
      <div className="h-[30cm]">
        <div className="flex justify-center">
          <img width={170} src={eupheusLogo} />
        </div>

        <div
          className="flex justify-center"
          style={{ marginTop: "50px", fontSize: "15pt" }}
        >
          <b style={{ borderBottom: "2px solid black" }}>
            CUSTOMER REGISTRATION FORM AND AGREEMENT
          </b>
        </div>
        <div
          className="flex justify-around"
          style={{ marginTop: "30px", fontSize: "11pt" }}
        >
          <div>No.: _________________</div>
          <div>Date :____________________</div>
          <div style={{border: "2px solid black"}}>
            <div style={{margin: "5px"}}>2022-23 To 2024-25</div>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: "11pt",
            border: "2px solid black",
          }}
        >
          <div style={{ margin: "20px" }}>
            <div className="flex justify-start">
              <b>Name of Party School*: ___________________________________</b>
            </div>
            <div className="flex justify-start" style={{ marginTop: "5px" }}>
              Status*: Sole Proprietary/ Partnership/ LLP/Pvt. Ltd. / Public
              Ltd. /Trust: ____________________________
            </div>
            <div className="flex justify-start" style={{ marginTop: "5px" }}>
              Address*: ________________________________
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>City*:__________________</div>
              <div>State*:_________________</div>
              <div>Pin Code*:__________________</div>
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>Phone*:__________________</div>
              <div>Mobile*:_________________</div>
              <div>E-Mail*:____________________</div>
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>
                Firm/ Company/Trust Registration Number*:__________________
              </div>
              <div>Dated:_____________________</div>
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>PAN No*:__________________(Copy Enclosed)</div>
              <div>GST. No*:_________________</div>
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>
                (Copy enclosed or in case if not registered with GST then
                furnish declaration in Annexure-B)
              </div>
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>
                Year of establishment of
                business:___________________________________
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "15px",
            fontSize: "11pt",
            border: "2px solid black",
          }}
        >
          <div style={{ margin: "20px" }}>
            <div className="flex justify-start">
              <b>
                Name of Proprietor/Partner/Director/Trustee*:
                _________________________
              </b>
            </div>
            <div className="flex justify-start" style={{ marginTop: "5px" }}>
              PAN No.*: ___________________
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>Address*: ________________________________</div>
              <div>Pin Code*:__________________________________________</div>
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>Phone*:__________________</div>
              <div>Mobile*:_________________</div>
              <div>E-Mail*:_____________</div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "15px",
            fontSize: "11pt",
            border: "2px solid black",
          }}
        >
          <div style={{ margin: "20px" }}>
            <div className="flex justify-start">
              Name of other Publishers/Suppliers from whom the party has credit
              facilities:
            </div>
            <div className="flex justify-around" style={{ marginTop: "5px" }}>
              <div>1. ________________________________</div>
              <div>
                Annual Business: __________________________________________
              </div>
            </div>
            <div className="flex justify-around" style={{ marginTop: "5px" }}>
              <div>1. ________________________________</div>
              <div>
                Annual Business: __________________________________________
              </div>
            </div>
            <div className="flex justify-around" style={{ marginTop: "5px" }}>
              <div>1. ________________________________</div>
              <div>
                Annual Business: __________________________________________
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "15px",
            fontSize: "11pt",
            border: "2px solid black",
          }}
        >
          <div style={{ margin: "20px" }}>
            <div className="flex justify-start">
              Name and address of the party’s main
              bankers*:_______________________________
            </div>
            <div className="flex justify-between" style={{ marginTop: "5px" }}>
              <div>Account Number*:________________________________</div>
              <div>
                Type of A/c (SB/CA/CC):
                __________________________________________
              </div>
            </div>
            <div className="flex justify-start">
              IFSC*:_______________________________
            </div>
            <div className="flex justify-start">Detail of Cheques*:</div>
            <div className="flex justify-around" style={{ marginTop: "5px" }}>
              <div>1. Cheque No.: ___________________</div>
              <div>Bank: ______________</div>
              <div>Branch/IFSC: ____________</div>
            </div>
            <div className="flex justify-around" style={{ marginTop: "5px" }}>
              <div>2. Cheque No.: ___________________</div>
              <div>Bank: ______________</div>
              <div>Branch/IFSC: ____________</div>
            </div>
            <div className="flex justify-around" style={{ marginTop: "5px" }}>
              <div>3. Cheque No.: ___________________</div>
              <div>Bank: ______________</div>
              <div>Branch/IFSC: ____________</div>
            </div>
          </div>
        </div>

        {/* <div
          style={{
            marginTop: "40px",
            fontSize: "8pt",
            borderTop: "2px solid silver",
          }}
        >
          <div
            className="flex justify-center"
            style={{ marginTop: "5px", fontSize: "8pt" }}
          >
            Proficiency Learning Solutions Private Limited
          </div>
          <div
            className="flex justify-center"
            style={{ marginTop: "1px", fontSize: "8pt" }}
          >
            A-12, 2nd Floor, Mohan Cooperative Industrial Estate, Main Mathura
            Road, New Delhi – 110044. Phone: +91-11-61400200
          </div>
          <div className="flex justify-center" style={{ fontSize: "8pt" }}>
            <a href={"https://www.eupheus.in/"}>https://www.eupheus.in/</a>
          </div>
        </div> */}
      </div>

      <div className="h-[30cm]">
        <div className="flex justify-center" style={{ marginTop: "30px" }}>
          <img width={170} src={eupheusLogo} />
        </div>

        <div className="flex justify-center" style={{ marginTop: "50px" }}>
          <b style={{ borderBottom: "1px solid black" }}>
            Agreement for supply of Educational Books
          </b>
        </div>

        <div
          style={{
            marginTop: "30px",
            fontSize: "11pt",
          }}
        >
          <div style={{ margin: "10px" }}>
            THIS AGREEMENT is made on this ___________ day of ________________,
            2022 , by and between Proficiency Learning Solutions Pvt. Ltd.,
            company incorporated and registered under the Companies Act, 2013
            with its registered office located at 5th Floor, Cabin No 3, Right
            side at Plot No E-196, Phase 8B, Mohali, Mohali, Punjab, India,
            160020 through Mr Ram kumar Hereinafter referred to as “Eupheus”
            which expression shall unless repugnant to the context means and
            include its successors and assigns of the ONE PART
          </div>
          <div className="flex justify-center">And</div>
          <div style={{ margin: "10px" }}>
            ____________________________________________________________ (the
            "Distributor"), with its principal place of business located at _
            B-2345 AMAR COLONY LAJPAT NAGAR ___NEW DELHI 110024_ through MR
            SUSHIL KUMAR SHARMA which expression shall unless repugnant to the
            context or meaning thereof, include its successors and permitted
            assigns, through its Authorized Signatory, on the OTHER PART.{" "}
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex justify-center">
          Eupheus and ABC BOOK SHOP PRIVATE LIMITED shall collectively be
          referred to as “Parties” and individually as “Party” wherever the
          context permits.
        </div>

        <div style={{ margin: "10px" }} className="flex justify-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOW, THEREFORE, in
          consideration of the promises hereinafter made by the parties hereto,
          it is agreed as follows:
        </div>

        <div style={{ margin: "10px" }} className="flex container">
          <div>1. </div>
          <div>
            <b>Credit Limit.</b> Distributer shall be entitled to a maximum
            annual Credit Limit of Rs.10 LAKHS_Rupees _TEN LAKHS during the term
            of this agreement.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>2. </div>
          <div>
            <b>Payment Process.</b> The Distributor is required to pay 60% of
            the total invoiced amount, within 90 Calendar Days from the date of
            invoice and balance payment of 40% within 120 Calendar Days from the
            date of Invoice. Payment shall be made via interbank transfer to
            Eupheus account at a bank designated by Eupheus or by Demand Draft.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>3. </div>
          <div>
            <b>Discount.</b> The Distributor shall be entitled to discount(s) on
            the products as per Annexure – 1, which shall be applicable in the
            event the payment is received as per the following Clause 2 above
            and such Turnover discount shall be applicable on Net Business i.e.
            Net Business would mean sales value as per invoice less discounts
            allowed/applied and adjusting the value of Returns as per Eupheus’
            credit note.{" "}
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>4. </div>
          <div>
            <b>Cost of Delivery.</b> Unless otherwise agreed between the Parties
            herein, Eupheus shall not be responsible for all shipping cost,
            including freight and domestic transportation charges.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>5. </div>
          <div>
            <b>Risk of Loss.</b> Title, risk of loss, theft and damage shall
            pass to Distributor upon delivery of Product to the carrier, whether
            appointed by the Distributor.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>6. </div>
          <div>
            <b>Defective Products.</b> In the event that the Product is found to
            be defective Distributor shall promptly notify Eupheus through
            e-mail or post of the existence of such Defect in the Product within
            three (3) Calendar days of acceptance of the Products. Both
            Distributor and Eupheus shall, in good faith, work to resolve the
            problem. After Eupheus determines that the product is defective and
            cannot be remedied without having such Defective Product shipped
            back to Eupheus, Eupheus will ship a replacement for the Defective
            Product within a reasonable time and Distributor shall, upon notice
            of shipment by Eupheus, exchange the Defective Product with the
            different product.
          </div>
        </div>
      </div>

      <div className="h-[30cm]">
        <div className="flex justify-center" style={{ marginTop: "30px" }}>
          <img width={170} src={eupheusLogo} />
        </div>

        <div style={{ margin: "10px" }} className="flex container">
          <div>7. </div>
          <div>
            <b>Return Policy.</b> The unsold books once delivered may be
            returned to Eupheus by the Distributor subject to the following
            conditions: <br /> (a) A maximum 10 % (ten percent) of invoiced
            value will be allowed to be returned if unutilized (“Returns”)
            quantity at any given point of time. <br />
            (b) The returned books shall not be utilized or used by any person
            and are in good condition, meaning thereby that the books shall not
            be torn or dirty or any scribbled marks or pen marks or bound or
            damaged or otherwise in such condition that the books are unfit for
            resale by Eupheus. <br />
            (c) Such returns need to be notified by the Distributor through
            e-mail or post. <br />
            (d) Such return of books shall be delivered by the Distributor with
            reasonable care to the warehouse/Clearing & Forwarding Agent of
            Eupheus, details of which shall be provided by Eupheus, within 180
            days of date of delivery and in no case later than 31st August of
            the year in which such books were invoiced/ supplied. <br />
            (e) The liability of expenses incurred by the Distributor for such
            return of books shall be of the Distributor and in no way such
            expenses shall be reimbursed to the Distributor by Eupheus. <br />
            (f) Any additional/special discount(s) applied at the time of sale
            shall be adjusted for the return of books and credit note will be
            calculated accordingly.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>8. </div>
          <div>
            <b>Trust Relationship:</b> The products supplied by Eupheus to the
            Distributor till the receipt of full payment by Eupheus shall be
            held under trust by the Distributor and returnable on simple demand
            by Eupheus through a written notice. Distributor agrees to issue 2
            (two) cheques as security as mentioned in the account opening form.
            In case the Customer changes its bank account or there is any
            notification by the bank / Reserve Bank of India requiring the
            changes in the cheques, from time to time, the Customer shall be
            obligated to change the security cheques given at the time of
            opening the account. In case Customer makes a default in making the
            payment or adhere to any term or condition of this Agreement,
            Eupheus will have the right to present any of the security cheque
            for realization of its dues without any obligation of informing the
            Customer. No Stock will be issued by Customer to any employee of
            Eupheus or transferred to any other third party under any condition
            whatsoever without the written authorization of undersigned or
            Managing Director / CFO of Eupheus.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>9. </div>
          <div>
            <b>Non Disclosure:</b> Each party shall protect the other's
            Confidential Information from unauthorized dissemination and use the
            same degree of care that such party uses to protect its own
            information. Neither party shall disclose to third parties the
            other's Confidential Information without the prior written consent
            of the other party. Neither party shall use the other's Confidential
            Information for purposes other than those necessary to directly
            further the purposes of this Agreement. Each employee or agent of
            the Distributor, performing duties hereunder, shall be made aware of
            this Agreement and said employee or agent of the Distributor is
            bound to the same level of confidentiality contained herein.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>10. </div>
          <div>
            <b>Termination of Agreement:</b> The term of this Agreement shall be
            for from the date of signing of this Agreement unless sooner
            terminated to 31st March 2025. Following such Initial Term, this
            Agreement can be renewed for successive three (3) year on mutual
            agreement on the same terms or amended terms, unless either party
            notifies the other in writing of an intention not to renew the
            Agreement. Termination shall not relieve either party of obligations
            incurred prior thereto. This Agreement may be terminated under the
            following stipulations without exception under any circumstances:{" "}
            <br />
            a. by the Distributor at anytime upon ninety (90) days written
            notice to Eupheus citing the reason. <br />
            b. by Eupheus upon ninety (90) days written notice to the
            Distributor citing the reason. <br />
            c. by Eupheus upon ninety (90) days written notice to the
            Distributor in the event of the Distributor’s involvement in
            voluntary or involuntary bankruptcy proceedings under the Bankruptcy
            Laws of India;
          </div>
        </div>
      </div>

      <div className="h-[30cm]">
        <div className="flex justify-center" style={{ marginTop: "30px" }}>
          <img width={170} src={eupheusLogo} />
        </div>

        <div style={{ margin: "10px" }} className="flex container">
          <div>11. </div>
          <div>
            <b>Relationship between the Parties:</b> The relationship between
            the parties established by this Agreement shall be solely that of
            supplier and distributor and all rights and powers not expressly
            granted to the Distributor are expressly reserved to Eupheus. The
            Distributor shall have no right, power or authority in any way to
            bind Eupheus for the fulfillment of any condition not herein
            contained, or to any contract or obligation, expressed or implied.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>12. </div>
          <div>
            <b>Severability:</b> The invalidity or unenforceability of any
            provisions of this Agreement shall not affect validity or
            enforceability of any other provision of this Agreement, which shall
            remain in full force and effect.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>13. </div>
          <div>
            <b>Amendments:</b> No change or modification of this Agreement will
            be valid unless it is in writing and signed by each party to this
            Agreement.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>14. </div>
          <div>
            <b>Applicable Law:</b> This Agreement shall be governed by Laws of
            India and the courts of Delhi shall have exclusive jurisdiction.
          </div>
        </div>
        <div style={{ margin: "10px" }} className="flex container">
          <div>15. </div>
          <div>
            <b>Resolution of Disputes:</b> Any dispute/claims arising out of or
            in connection with this contract, including any question regarding
            its existence, validity or termination shall be first tried by
            negotiation between the parties by their authorised representatives
            within fourteen (14) days after one party delivers a written request
            with details of disputes/claims for a meeting to the other party. If
            after such meeting, the parties have not succeeded in negotiating a
            resolution of the dispute, then either party may commence
            arbitration as provided herein by delivering a written demand for
            arbitration to the other party. If either party commences
            arbitration in the manner described above, the dispute will be
            referred to an independent sole arbitrator mutually appointed by the
            parties. Such arbitration shall be held in Delhi and seat of
            arbitration shall also be Delhi. The arbitration will be governed by
            Arbitration and Conciliation, Act 1996 along with all its amended
            provisions and the language of arbitration shall be English only.
            The law governing this arbitration agreement shall be Indian Law.
            The law governing the contract shall be Indian Laws.
          </div>
        </div>

        <div style={{ margin: "40px" }}>
          <div style={{ marginTop: "30px" }}>
            IN WITNESS WHEREOF, the parties have caused this Agreement to be
            executed by their duly authorized officers as of the date and year
            indicated above.
          </div>
        </div>

        <div className="flex justify-around" style={{ marginTop: "30px" }}>
          <div>
            <div>
              <b>For Proficiency Learning</b>
            </div>
            <div>
              <b>Solutions Private Limited</b>
            </div>
            <div style={{ marginTop: "20px" }}>By: _____________</div>
            <div style={{ marginTop: "2px" }}>Name: _____________</div>
            <div style={{ marginTop: "2px" }}>Title: _____________</div>
            <div style={{ marginTop: "2px" }}>(Authorised Officer)</div>
            <div style={{ marginTop: "2px" }}>Witness1: _______________</div>
          </div>
          <div>
            <div>
              <b>For Customer</b>
            </div>
            <div style={{ marginTop: "45px" }}>By: _____________</div>
            <div style={{ marginTop: "2px" }}>Name: _____________</div>
            <div style={{ marginTop: "2px" }}>Title: _____________</div>
            <div style={{ marginTop: "2px" }}>(Authorised Officer)</div>
            <div style={{ marginTop: "2px" }}>Witness1: _______________</div>
          </div>
        </div>
      </div>

      <div className="h-[30cm]">
        <div className="flex justify-center" style={{ marginTop: "30px" }}>
          <img width={170} src={eupheusLogo} />
        </div>
        <div className="flex justify-center" style={{ marginTop: "50px" }}>
          <b style={{ borderBottom: "1px solid black" }}>Annexure A</b>
        </div>
        <div className="flex justify-center" style={{ marginTop: "10px" }}>
          <b style={{ borderBottom: "1px solid black" }}>
            Discounts Applicable
          </b>
        </div>

        <div>
          <div style={{ margin: "40px" }}>
            <table style={{ border: "1px solid black", width: "100%"}}>
              <tr style={{ border: "1px solid black" }}>
                <th style={{ border: "1px solid black", width: "40%" }}>
                  Type of Discounts
                </th>
                <th style={{ border: "1px solid black", width: "20%" }}>%</th>
                <th style={{ border: "1px solid black", width: "40%" }}>
                  Remarks
                </th>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>EUPHEUS</td>
                <td style={{ border: "1px solid black" }}></td>
                <td style={{ border: "1px solid black" }}></td>
              </tr>

              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>a) English</td>
                <td style={{ border: "1px solid black" }}>25% </td>
                <td style={{ border: "1px solid black" }}>On GROSS </td>
              </tr>

              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>b) others </td>
                <td style={{ border: "1px solid black" }}>30% </td>
                <td style={{ border: "1px solid black" }}>On GROSS </td>
              </tr>

              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>CASH DISCOUNT</td>
                <td style={{ border: "1px solid black" }}>5%</td>
                <td style={{ border: "1px solid black" }}>AS PER POLICY</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>TOD</td>
                <td style={{ border: "1px solid black" }}>SLAB</td>
                <td style={{ border: "1px solid black" }}>ON NET SALE(SALE-RETURN) </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>ALLIED </td>
                <td style={{ border: "1px solid black" }}></td>
                <td style={{ border: "1px solid black" }}></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>a) Chemistry</td>
                <td style={{ border: "1px solid black" }}>25%</td>
                <td style={{ border: "1px solid black" }}>On GROSS</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>b) others </td>
                <td style={{ border: "1px solid black" }}>30%</td>
                <td style={{ border: "1px solid black" }}>On GROSS</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
                <td style={{ border: "1px solid black" }}>&nbsp;</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>learning links</td>
                <td style={{ border: "1px solid black" }}>30% </td>
                <td style={{ border: "1px solid black" }}>On GROSS </td>
              </tr>


              
            </table>
          </div>
        </div>
        <div className="flex justify-around" style={{ marginTop: "20px" }}>
          <div>
            <div>
              <b>For Proficiency Learning</b>
            </div>
            <div>
              <b>Solutions Private Limited</b>
            </div>
            <div style={{ marginTop: "10px" }}>Authorised Signatory</div>
            <div style={{ marginTop: "5px" }}>Name: _______________</div>
            <div style={{ marginTop: "5px" }}>Title/Designation: _______</div>
          </div>
          <div>
            <div>
              <b>For Customer</b>
            </div>
            <div style={{ marginTop: "30px" }}>(Stamp and Signature)</div>
            <div style={{ marginTop: "5px" }}>Name: _______________</div>
            <div style={{ marginTop: "5px" }}>Title/Designation: ________</div>
          </div>
        </div>
        <div style={{ marginTop: "20px", borderTop: "2px solid silver" }}>
          <div className="flex justify-center" style={{ marginTop: "20px" }}>
            <b style={{ borderBottom: "1px solid black" }}>Annexure B</b>
          </div>
          <div className="flex justify-center" style={{ marginTop: "10px" }}>
            <b>
              Declaration of GST Not-Applicable under the provisions of Goods
              and Service Tax Act
            </b>
          </div>
          <div style={{ margin: "20px" }}>
            I/ We……………………………………………………………………………………………………………………………………… (Name of
            the Proprietor/Karta/Authorized Signatory), being
            …………………………………………………………………… (Designation) of
            ………………………………………………………….(Legal Name as per PAN) do hereby state that
            I/We am/are not liable to registration under the provisions of Goods
            and Service Tax Act.
          </div>
          <div style={{ margin: "20px" }}>
            I/We declare that as soon as we Become eligible for GST
            Registration, we shall get ourselves registered with the Goods and
            Services Tax department and give our GSTN to Proficiency Learning
            Solutions Private Limited.
          </div>
          <div className="flex justify-around" style={{ marginTop: "20px" }}>
            <div>
              <div style={{ marginTop: "60px" }}>
                <u>GSTIN AAACA1234DIZL</u>
              </div>
            </div>
            <div>
              <div>
                <b>For Customer</b>
              </div>
              <div style={{ marginTop: "30px" }}>(Stamp and Signature)</div>
              <div style={{ marginTop: "5px" }}>Date: _______________</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AofPdf2;