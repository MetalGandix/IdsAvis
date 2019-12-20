package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Statistiche {
    @Id
    private long anno;

    private String numeroDonazioni;

    private String zeroNegativo;

    private String zeroPositivo;

    private String aPositivo;

    private String aNegativo;

    private String bPositivo;

    private String bNegativo;

    private String abNegativo;

    private String abPositivo;

    public long getAnno() {
        return anno;
    }

    public void setAnno(long anno) {
        this.anno = anno;
    }

    public String getNumeroDonazioni() {
        return numeroDonazioni;
    }

    public void setNumeroDonazioni(String numeroDonazioni) {
        this.numeroDonazioni = numeroDonazioni;
    }

    public String getZeroNegativo() {
        return zeroNegativo;
    }

    public void setZeroNegativo(String zeroNegativo) {
        this.zeroNegativo = zeroNegativo;
    }

    public String getZeroPositivo() {
        return zeroPositivo;
    }

    public void setZeroPositivo(String zeroPositivo) {
        this.zeroPositivo = zeroPositivo;
    }

    public String getaPositivo() {
        return aPositivo;
    }

    public void setaPositivo(String aPositivo) {
        this.aPositivo = aPositivo;
    }

    public String getaNegativo() {
        return aNegativo;
    }

    public void setaNegativo(String aNegativo) {
        this.aNegativo = aNegativo;
    }

    public String getbPositivo() {
        return bPositivo;
    }

    public void setbPositivo(String bPositivo) {
        this.bPositivo = bPositivo;
    }

    public String getbNegativo() {
        return bNegativo;
    }

    public void setbNegativo(String bNegativo) {
        this.bNegativo = bNegativo;
    }

    public String getAbNegativo() {
        return abNegativo;
    }

    public void setAbNegativo(String abNegativo) {
        this.abNegativo = abNegativo;
    }

    public String getAbPositivo() {
        return abPositivo;
    }

    public void setAbPositivo(String abPositivo) {
        this.abPositivo = abPositivo;
    }



    

    
}