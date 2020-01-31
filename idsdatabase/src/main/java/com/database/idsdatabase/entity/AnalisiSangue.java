package com.database.idsdatabase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AnalisiSangue {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String paziente;
	private String globuliRossi;
	private String globuliBianchi;
	private String emoglobina;
	private String ematocrito;
	private String mcv;
	private String mch;
	private String mchc;
	private String piastrine;
	private static String annotazione;
	private static String email;

	public AnalisiSangue() {

	}

	public static String getemail() {
		return email;
	}

	public void setEmail(final String email) {
		this.email = email;
	}

	public AnalisiSangue(final long id, final String paziente) {
		this.id = id;
		this.paziente = paziente;
	}

	public long getid() {
		return id;
	}

	public void setid(final Long id) {
		this.id = id;
	}

	public static String getannotazione() {
		return annotazione;
	}

	public void setannotazione(final String annotazione) {
        this.annotazione = annotazione;
	}

    public String getpaziente() {
		return paziente;
	}

	public void setpaziente(final String paziente) {
        this.paziente = paziente;
	}

	public String getemoglobina() {
		return emoglobina;
	}

	public void setemoglobina(final String emoglobina) {
        this.emoglobina = emoglobina;
	}

	public String getematocrito() {
		return ematocrito;
	}

	public void setematocrito(final String ematocrito) {
        this.ematocrito = ematocrito;
	}

	public String getmcv() {
		return mcv;
	}

	public void setmcv(final String mcv) {
        this.mcv = mcv; 
	}

	public String getmch() {
		return mch;
	}

	public void setmch(final String mch) {
        this.mch = mch;
	}

	public String getmchc() {
		return mchc;
	}

	public void setmchc(final String mchc) {
        this.mchc = mchc;
	}

	public String getpiastrine() {
		return piastrine;
	}

	public void setpiastrine(final String piastrine) {
        this.piastrine = piastrine;
	}

	public String getglobuliRossi() {
		return globuliRossi;
	}

	public void setglobuliRossi(final String globuliRossi) {
        this.globuliRossi = globuliRossi;
	}

	public String getglobuliBianchi() {
		return globuliBianchi;
	}

	public void setglobuliBianchi(final String globuliBianchi) {
        this.globuliBianchi = globuliBianchi;
	}

    @Override
	public String toString(){
		return "" + id + "" + paziente + "" + email + "" + globuliRossi + "" + globuliBianchi + "" + emoglobina + "" + ematocrito + "" + mcv + "" + mch + "" + mchc + "" + piastrine + "" + annotazione;
	}
}