package com.database.idsdatabase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AnalisiSangue
{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	private String name;
	private String globuliRossi;
	private String globuliBianchi;
	private String emoglobina;
	private String ematocrito;
	private String mcv;
	private String mch;
	private String mchc;
	private String piastrine;
	private String annotazione;
	
	
	public AnalisiSangue(){

	}
	public AnalisiSangue(final long id, final String name) {
        this.id = id;
        this.name = name;
	}

    

    public long getid() {
		return id;
    }
    
	public void setid(final Long id) {
		this.id = id;
	}
	
	public String getannotazione() {
		return annotazione;
	}

	public void setannotazione(final String annotazione) {
        this.annotazione = annotazione;
	}

    public String getname() {
		return name;
	}

	public void setname(final String name) {
        this.name = name;
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
		return "" + id + "" + name + "" + globuliRossi + "" + globuliBianchi + "" + emoglobina + "" + ematocrito + "" + mcv + "" + mch + "" + mchc + "" + piastrine + "" + annotazione;
	}
}